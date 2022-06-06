package ru.council.competitions.services;

import org.springframework.stereotype.Component;
import ru.council.competitions.entities.CompetitionEntity;
import ru.council.competitions.entities.ParticipantEntity;
import ru.council.competitions.entities.ParticipationAuditEntity;
import ru.council.competitions.models.CompetitionModel;
import ru.council.competitions.models.ParticipantModel;
import ru.council.competitions.models.ParticipationAuditModel;
import ru.council.competitions.repositories.ParticipantEntityRepository;
import ru.council.competitions.repositories.ParticipationAuditRepository;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class ParticipantsService {

    private final CompetitionsService competitionsService;
    private final ParticipantEntityRepository participantEntityRepository;
    private final ParticipationAuditRepository participationAuditRepository;

    public ParticipantsService(CompetitionsService competitionsService, ParticipantEntityRepository participantEntityRepository, ParticipationAuditRepository participationAuditRepository) {
        this.competitionsService = competitionsService;
        this.participantEntityRepository = participantEntityRepository;
        this.participationAuditRepository = participationAuditRepository;
    }

    public ParticipantEntity save(ParticipantEntity entity) {
        participantEntityRepository.saveAndFlush(entity);
        return entity;
    }

    public ParticipantEntity getParticipantById(long id) {
        Optional<ParticipantEntity> participant = participantEntityRepository.findParticipantEntityByParticipantId(id);

        if (participant.isEmpty()) {
            throw new EntityNotFoundException("No such entity");
        }

        return participant.get();
    }

    public ParticipationAuditModel registerOnCompetition(long participantId, long competitionId) {
        CompetitionEntity competition = competitionsService.getCompetitionById(competitionId);

        ParticipationAuditEntity registration = new ParticipationAuditEntity();

        registration.setCompetition(competition);
        registration.setParticipant(getParticipantById(participantId));

        participationAuditRepository.saveAndFlush(registration);

        ParticipationAuditModel model = new ParticipationAuditModel();

        model.setAuditId(registration.getAuditId());

        return model;
    }

    public List<ParticipantModel> listAllParticipants() {
        List<ParticipantEntity> all = participantEntityRepository.findAll();

        List<ParticipantModel> result = new ArrayList<>();

        for (ParticipantEntity participant : all) {
            result.add(convertEntityToModel(participant));
        }

        return result;
    }

    public ParticipantModel convertEntityToModel(ParticipantEntity participant) {
        ParticipantModel model = new ParticipantModel();

        List<CompetitionEntity> allByParticipant = participationAuditRepository.findAllByParticipant(participant).stream().map(
                ParticipationAuditEntity::getCompetition
        ).collect(Collectors.toList());

        List<CompetitionModel> collect = allByParticipant.stream().map(
                competitionsService::convertEntityToModel
        ).collect(Collectors.toList());

        model.setParticipation(collect);

        model.setId(participant.getParticipantId());

        String fio = String.join(" ", participant.getSurname(), participant.getName());

        if (participant.getLastname() != null) {
            fio = String.join(" ", fio, participant.getLastname());
        }

        model.setFio(fio);

        model.setWeight(participant.getWeight());

        String instituteCourseGroup = "";

        if (participant.getInstitute() != null) {
            instituteCourseGroup += participant.getInstitute();
        }

        if (participant.getCourse() != null) {
            instituteCourseGroup += ", " + participant.getCourse();
        }

        if (participant.getGroup() != null) {
            instituteCourseGroup += ", " + participant.getGroup();
        }

        model.setInstituteCourseGroup(instituteCourseGroup);

        return model;
    }

}
