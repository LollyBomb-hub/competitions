package ru.council.competitions.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.council.competitions.repositories.CompetitionEntityRepository;

@Slf4j
@RestController
@RequestMapping("/api/documents")
public class DocumentsController {

    private final CompetitionEntityRepository competitionEntityRepository;

    public DocumentsController(CompetitionEntityRepository competitionEntityRepository) {
        this.competitionEntityRepository = competitionEntityRepository;
    }

}