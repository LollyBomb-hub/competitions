package ru.council.competitions.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.council.competitions.entities.CompetitionEntity;

import java.util.Optional;

public interface CompetitionEntityRepository extends JpaRepository<CompetitionEntity, Long> {

    Optional<CompetitionEntity> findCompetitionEntityByCompetitionId(long id);

}
