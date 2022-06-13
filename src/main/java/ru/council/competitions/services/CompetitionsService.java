package ru.council.competitions.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import ru.council.competitions.entities.CompetitionEntity;
import ru.council.competitions.entities.ParticipantEntity;
import ru.council.competitions.entities.ParticipationAuditEntity;
import ru.council.competitions.enums.WeightCategoriesMapperEnum;
import ru.council.competitions.models.CompetitionModel;
import ru.council.competitions.repositories.CompetitionEntityRepository;
import ru.council.competitions.repositories.ParticipationAuditRepository;

import javax.persistence.EntityNotFoundException;
import java.util.*;
import java.util.stream.Collectors;

@Component
@Slf4j
public class CompetitionsService {

    private final ParticipationAuditRepository participationAuditRepository;
    private final CompetitionEntityRepository competitionEntityRepository;

    public CompetitionsService(ParticipationAuditRepository participationAuditRepository, CompetitionEntityRepository competitionEntityRepository) {
        this.participationAuditRepository = participationAuditRepository;
        this.competitionEntityRepository = competitionEntityRepository;
    }

    public CompetitionEntity save(CompetitionEntity entity) {
        competitionEntityRepository.saveAndFlush(entity);
        return entity;
    }

    public List<CompetitionModel> listAllCompetitions(Long filtered) {
        log.info("Listing all competitions!");
        List<CompetitionEntity> allCompetitions = competitionEntityRepository.findAll();

        List<Long> competitionIds = allCompetitions.stream().map(CompetitionEntity::getCompetitionId).collect(Collectors.toList());

        Map<Long, List<ParticipationAuditEntity>> competitionToAudit = new HashMap<>();

        List<ParticipationAuditEntity> audit = participationAuditRepository.findAllByCompetitionIn(allCompetitions);

        competitionIds.forEach(
                id -> competitionToAudit.put(
                        id,
                        audit.stream().filter(
                                ael -> ael.getCompetition().getCompetitionId() == id
                        ).collect(Collectors.toList())
                )
        );

        List<CompetitionModel> result = new ArrayList<>();

        for (CompetitionEntity entity : allCompetitions) {
            List<ParticipationAuditEntity> participationAuditEntities = competitionToAudit.get(entity.getCompetitionId());
            List<ParticipantEntity> participants = participationAuditEntities.stream().map(ParticipationAuditEntity::getParticipant).collect(Collectors.toList()).stream().filter(Objects::nonNull).collect(Collectors.toList());
            List<Long> participantIds = participants.stream().map(ParticipantEntity::getParticipantId).collect(Collectors.toList());
            if (!(participantIds.contains(filtered) && filtered != null))
                result.add(convertEntityToModel(entity, participationAuditEntities));
        }

        return result;
    }

    public CompetitionEntity getCompetitionById(long competitionId) {
        Optional<CompetitionEntity> competition = competitionEntityRepository.findCompetitionEntityByCompetitionId(competitionId);

        if (competition.isEmpty()) {
            throw new EntityNotFoundException("No such entity");
        }

        return competition.get();
    }

    public CompetitionModel convertEntityToModel(CompetitionEntity entity, List<ParticipationAuditEntity> currentCompetitionParticipants) {
        CompetitionModel competitionModel = new CompetitionModel();
        competitionModel.setId(entity.getCompetitionId());
        competitionModel.setName(entity.getCompetitionName());

        WeightCategoriesMapperEnum.processAllWeightCategories(competitionModel, currentCompetitionParticipants);

        return competitionModel;
    }

    public CompetitionModel convertEntityToModel(CompetitionEntity entity) {
        CompetitionModel competitionModel = new CompetitionModel();
        competitionModel.setId(entity.getCompetitionId());
        competitionModel.setName(entity.getCompetitionName());

        List<ParticipationAuditEntity> currentCompetitionParticipants = participationAuditRepository.findAllByCompetition(entity);

        WeightCategoriesMapperEnum.processAllWeightCategories(competitionModel, currentCompetitionParticipants);

        return competitionModel;
    }
}
