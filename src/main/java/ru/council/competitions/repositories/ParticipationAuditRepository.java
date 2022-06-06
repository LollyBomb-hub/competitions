package ru.council.competitions.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.council.competitions.entities.CompetitionEntity;
import ru.council.competitions.entities.ParticipantEntity;
import ru.council.competitions.entities.ParticipationAuditEntity;

import java.util.Collection;
import java.util.List;

public interface ParticipationAuditRepository extends JpaRepository<ParticipationAuditEntity, Long> {

    List<ParticipationAuditEntity> findAllByCompetitionIn(Collection<CompetitionEntity> competitionId);
    List<ParticipationAuditEntity> findAllByCompetition(CompetitionEntity competition);
    List<ParticipationAuditEntity> findAllByParticipant(ParticipantEntity participant);

}
