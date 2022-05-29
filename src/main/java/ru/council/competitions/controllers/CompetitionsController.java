package ru.council.competitions.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.council.competitions.repositories.CompetitionEntityRepository;

@Slf4j
@RestController
@RequestMapping("/api/competitions")
public class CompetitionsController {

    private final CompetitionEntityRepository competitionEntityRepository;

    public CompetitionsController(CompetitionEntityRepository competitionEntityRepository) {
        this.competitionEntityRepository = competitionEntityRepository;
    }

    @GetMapping("/list")
    public ResponseEntity<?> getAllCompetitions() {
        return ResponseEntity.ok(competitionEntityRepository.findAll());
    }

}
