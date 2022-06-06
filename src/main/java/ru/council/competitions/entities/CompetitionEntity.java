package ru.council.competitions.entities;

import com.fasterxml.jackson.annotation.JsonAlias;
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
    private long competitionId;
    @JsonAlias("_name")
    @Column(name = "competitionName", nullable = false)
    private String competitionName;
    @JsonAlias("_description")
    @Column(name = "competitionDescription")
    private String competitionDescription;
    @JsonAlias("_date")
    @Column(name = "dateOfCompetition", nullable = false)
    private Date dateOfCompetition;

}
