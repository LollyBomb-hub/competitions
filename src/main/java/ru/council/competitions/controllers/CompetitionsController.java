package ru.council.competitions.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.council.competitions.entities.CompetitionEntity;
import ru.council.competitions.models.CompetitionModel;
import ru.council.competitions.services.CompetitionsService;

import java.util.List;

@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/competitions")
public class CompetitionsController {

    private final CompetitionsService competitionsService;

    public CompetitionsController(CompetitionsService competitionsService) {
        this.competitionsService = competitionsService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createCompetition(@RequestBody CompetitionEntity info) {
        return ResponseEntity.ok(competitionsService.save(info));
    }

    @GetMapping("/list")
    public ResponseEntity<List<CompetitionModel>> getAllCompetitions(@RequestParam(required = false) Long filtered) {
        log.info("Listing competitions!");
        return ResponseEntity.ok(competitionsService.listAllCompetitions(filtered));
    }

}
