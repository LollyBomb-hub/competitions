package ru.council.competitions.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "participation_audit")
@Getter
@Setter
@ToString
public class ParticipationAuditEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long auditId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "competition", referencedColumnName = "competitionId", nullable = false)
    private CompetitionEntity competition;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "participant", referencedColumnName = "participantId", nullable = false)
    private ParticipantEntity participant;

}
