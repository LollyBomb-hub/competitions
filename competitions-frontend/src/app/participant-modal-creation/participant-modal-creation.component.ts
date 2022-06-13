import {Component, OnInit} from '@angular/core';
import ParticipantCreationModel from "../../models/ParticipantCreationModel";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-participant-modal-creation',
  templateUrl: './participant-modal-creation.component.html',
  styleUrls: ['./participant-modal-creation.component.css']
})
export class ParticipantModalCreationComponent {

  public creationModel: ParticipantCreationModel = new ParticipantCreationModel();
  private name: string = "";
  private surname: string = "";
  private lastname: string = "";
  private weight: number = 0;
  private institute?: string = undefined;
  private course?: number = undefined;
  private group?: string = undefined;

  constructor(public dialogRef: MatDialogRef<ParticipantModalCreationComponent>) {
  }

  updateName() {
    this.name = (document.getElementById("naming") as HTMLInputElement).value
  }

  createParticipant() {
    this.creationModel.name = this.name;
    this.creationModel.surname = this.surname;
    this.creationModel.lastname = this.lastname;
    this.creationModel.weight = this.weight;

    this.creationModel.institute = this.institute;
    this.creationModel.course = this.course;
    this.creationModel.group = this.group;
    fetch(
      "http://localhost:8080/api/participants/create",
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
        this.dialogRef.close();
      }
    )
  }

  updateSurname() {
    this.surname = (document.getElementById("surname") as HTMLInputElement).value
  }

  updateLastname() {
    this.lastname = (document.getElementById("lastname") as HTMLInputElement).value
  }

  updateWeight() {
    this.weight = Number.parseFloat((document.getElementById("weight") as HTMLInputElement).value)
  }

  updateInstitute() {
    this.institute = (document.getElementById("institute") as HTMLInputElement).value
  }

  courseSelected() {
    let selectElement = document.getElementById("course") as HTMLSelectElement;
    let option = selectElement.options[selectElement.selectedIndex] as HTMLOptionElement;
    this.course = Number.parseInt(option.value)
  }

  updateGroup() {
    this.group = (document.getElementById("group") as HTMLInputElement).value;
  }
}
