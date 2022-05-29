package ru.council.competitions.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(
        name = "competitions",
        indexes = {
                @Index(columnList = "competitionId", name = "competitionId"),
                @Index(columnList = "dateOfCompetition", name = "dateOfCompetition")
        }
)
public class CompetitionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer competitionId;
    @Column(nullable = false)
    private String competitionName;
    @Column(nullable = false)
    private Date dateOfCompetition;

}
