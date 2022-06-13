import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import CompetitionModel from "../../models/CompetitionModel";

export default interface RegistrationData {
  participantId: number
}

@Component({
  selector: 'app-participant-registration-component',
  templateUrl: './participant-registration.component.html',
  styleUrls: ['./participant-registration.component.css']
})
export class ParticipantRegistrationComponent {

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

  public rowData: CompetitionModel[] = [ ];
  isError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ParticipantRegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RegistrationData
  ) {
    this.rowData = [];

    fetch(
      "http://localhost:8080/api/competitions/list?filtered=" + this.data.participantId,
      {
        method: "get",
        headers: {
          'Accept': 'application/json'
        }
      }
    ).then((result) => {
        return result.json()
      }
    ).then((result) => {
        for (var i = 0; i < result.length; i++) {
          this.rowData.push(result[i]);
        }
      }
    )
  }

  update() {return true;}

  registerOn(row: CompetitionModel) {
    fetch(
      "http://localhost:8080/api/participants/register/" + this.data.participantId + "/on/" + row.id,
      {
        method: "post",
        headers: {
          'Accept': 'application/json'
        }
      }
    ).then((result) => {
        if (result.ok) {
          this.dialogRef.close();
        } else {
          console.log("Error!");
          this.isError = true;
        }
      }
    )
  }
}
