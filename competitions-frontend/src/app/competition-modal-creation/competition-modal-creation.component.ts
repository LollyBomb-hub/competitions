import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import CompetitionCreationModel from "../../models/CompetitionCreationModel";

@Component({
  selector: 'app-competition-modal-creation',
  templateUrl: './competition-modal-creation.component.html'
})
export class CompetitionModalCreationComponent {

  public creationModel: CompetitionCreationModel = new CompetitionCreationModel();
  name: string = "";
  description: string = "";
  date: Date = new Date();

  constructor(
    public dialogRef: MatDialogRef<CompetitionModalCreationComponent>
  ) {
  }

  createCompetition() {
    this.creationModel.description = this.description;
    this.creationModel.name = this.name;
    this.creationModel.date = this.date;
    fetch(
      "http://localhost:8080/api/competitions/create",
      {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.creationModel)
      }
    ).then(
      (value) => {
        return value.json()
      }
    ).then(
      (jsonResponse) => {
        alert(jsonResponse)
        this.close()
      }
    )
  }

  close() {
    this.dialogRef.close()
  }

  updateName() {
    this.name = (document.getElementById("naming") as HTMLInputElement).value;
  }

  updateDescription() {
    this.description = (document.getElementById("description") as HTMLTextAreaElement).value;
  }

  updateDate() {
    this.date = new Date(Date.parse((document.getElementById("startDate") as HTMLInputElement).value));
  }
}
