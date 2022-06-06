package ru.council.competitions.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class ParticipantModel {

    private long id;
    private String fio;
    private double weight;
    private String instituteCourseGroup;

    private List<CompetitionModel> participation;

}
