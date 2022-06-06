package ru.council.competitions.entities;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(
        name = "participants",
        indexes = {
                @Index(columnList = "participantId", name = "participantId"),
                @Index(columnList = "participantName", name = "participantName"),
                @Index(columnList = "participantSurname", name = "participantSurname"),
                @Index(columnList = "participantLastname", name = "participantLastname")
        },
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "participantId")
        }
)
@Getter
@Setter
@ToString
public class ParticipantEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long participantId;
    @JsonAlias("_name")
    @Column(name = "participantName", nullable = false)
    private String name;
    @JsonAlias("_surname")
    @Column(name = "participantSurname", nullable = false)
    private String surname;
    @JsonAlias("_lastname")
    @Column(name = "participantLastname")
    private String lastname;
    @JsonAlias("_weight")
    @Column(name = "weight", nullable = false)
    private double weight;
    @JsonAlias("_institute")
    @Column(name = "institute")
    private String institute;
    @JsonAlias("_course")
    @Column(name = "course")
    private Integer course;
    @JsonAlias("_group")
    @Column(name = "students_group")
    private String group;

}
