package ru.council.competitions.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.council.competitions.entities.ParticipantEntity;
import ru.council.competitions.models.ParticipantModel;
import ru.council.competitions.services.ParticipantsService;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/participants")
public class ParticipantsController {

    private final ParticipantsService participantsService;

    public ParticipantsController(ParticipantsService participantsService) {
        this.participantsService = participantsService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createParticipant(@RequestBody ParticipantEntity info) {
        return ResponseEntity.ok(participantsService.save(info));
    }

    @GetMapping("/get/{participantId}")
    public ResponseEntity<?> getParticipant(@PathVariable long participantId) {
        try {
            ParticipantEntity participant = participantsService.getParticipantById(participantId);
            return ResponseEntity.ok(participantsService.convertEntityToModel(participant));
        } catch (EntityNotFoundException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/register/{participantId}/on/{competitionId}")
    public ResponseEntity<?> registerParticipantOnCompetition(@PathVariable long participantId, @PathVariable long competitionId) {
        return ResponseEntity.ok(participantsService.registerOnCompetition(participantId, competitionId));
    }

    @GetMapping("/list")
    public ResponseEntity<List<ParticipantModel>> getAllParticipants() {
        return ResponseEntity.ok(participantsService.listAllParticipants());
    }
}
