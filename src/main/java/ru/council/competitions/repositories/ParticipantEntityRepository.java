package ru.council.competitions.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.council.competitions.entities.ParticipantEntity;

import java.util.Optional;

public interface ParticipantEntityRepository extends JpaRepository<ParticipantEntity, Long> {

    Optional<ParticipantEntity> findParticipantEntityByParticipantId(Long id);

}