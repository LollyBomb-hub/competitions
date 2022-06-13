import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import ParticipantModel from "../../models/ParticipantModel";
import {CompetitionModalCreationComponent} from "../competition-modal-creation/competition-modal-creation.component";
import {MatDialog} from "@angular/material/dialog";
import {ParticipantRegistrationComponent} from "../participant-registration-component/participant-registration.component";

@Component({
  selector: 'app-participant-info-component',
  templateUrl: './participant-info-component.component.html',
  styleUrls: ['./participant-info-component.component.css']
})
export class ParticipantInfoComponentComponent implements OnInit {

  public columnDefs: string[] = [
    "#",
    "Наименование",
    "53",
    "58",
    "64",
    "71",
    "79",
    "88",
    "98",
    "98+",
    "100",
    '101',
    "102",
    "103"
  ];

  public model: ParticipantModel | null = null;
  private participantId: number = -1;

  constructor(public dialog: MatDialog,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(
      (map) => {
        let param = map.get("participantId");
        if (param != null) {
          this.participantId = Number.parseInt(param);
        }
      }
    );
    fetch(
      "http://localhost:8080/api/participants/get/" + this.participantId,
      {
        method: 'GET'
      }
    ).then(
      (result) => {
        if (result.ok) {
          return result.json();
        } else return null;
      }
    ).then(
      (result) => {
        if (result != null) {
          this.model = result as ParticipantModel;
          console.log(this.model);
        }
      }
    );
  }

  ngOnInit() {
  }

  update() {}

  register() {
    const dialogRef = this.dialog.open(
      ParticipantRegistrationComponent,
      {
        hasBackdrop: true,
        data: {
          participantId: this.participantId
        }
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    })
  }
}
