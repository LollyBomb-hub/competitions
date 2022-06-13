import {Component, OnInit} from '@angular/core';
import ParticipantModel from "../../models/ParticipantModel";
import {MatDialog} from "@angular/material/dialog";
import {ParticipantModalCreationComponent} from "../participant-modal-creation/participant-modal-creation.component";

@Component({
  selector: 'app-participants-list-page',
  templateUrl: './participants-list-page.component.html',
  styleUrls: ['./participants-list-page.component.css']
})
export class ParticipantsListPageComponent implements OnInit {

  public columnDefs: string[] = [
    "#",
    "Фамилия имя очество",
    "Вес участника",
    "Институт, курс, группа"
  ];
  public rowData: ParticipantModel[] = [ ];

  public update() {
    return true;
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rowData = [];
    fetch(
      "http://localhost:8080/api/participants/list",
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

  addButtonClicked() {
    const dialogRef = this.dialog.open(
      ParticipantModalCreationComponent,
      {
        hasBackdrop: true,
        data: {
          name: "t1",
          animal: "animal"
        },
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    })
  }

  openInfo(row: ParticipantModel) {
    window.location.href = "http://localhost:4200/participant/" + row.id;
  }
}
