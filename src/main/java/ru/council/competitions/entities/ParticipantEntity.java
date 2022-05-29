package ru.council.competitions.entities;

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
        private Integer participantId;
        @Column(name = "participantName")
        private String name;
        @Column(name = "participantSurname")
        private String surname;
        @Column(name = "participantLastname")
        private String lastname;

}
