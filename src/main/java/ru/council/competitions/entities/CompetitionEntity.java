package ru.council.competitions.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(
        name = "competitions",
        indexes = {
                @Index(columnList = "competitionId", name = "competitionId"),
                @Index(columnList = "competitionName", name = "competitionName"),
                @Index(columnList = "dateOfCompetition", name = "dateOfCompetition")
        },
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "competitionId")
        }
)
@Getter
@Setter
@ToString
public class CompetitionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer competitionId;
    @Column(name = "competitionName", nullable = false)
    private String competitionName;
    @Column(name = "dateOfCompetition", nullable = false)
    private Date dateOfCompetition;

}
