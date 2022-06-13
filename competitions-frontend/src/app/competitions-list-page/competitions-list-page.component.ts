import {Component, OnInit} from '@angular/core';
import CompetitionModel from "../../models/CompetitionModel";
import {MatDialog} from "@angular/material/dialog";
import {CompetitionModalCreationComponent} from "../competition-modal-creation/competition-modal-creation.component";

@Component({
  selector: 'app-competitions-list-page',
  templateUrl: './competitions-list-page.component.html',
  styleUrls: ['./competitions-list-page.component.css']
})
export class CompetitionsListPageComponent implements OnInit {
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

  public update() {
    return true;
  }

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.rowData = [];
    fetch(
      "http://localhost:8080/api/competitions/list",
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
      CompetitionModalCreationComponent,
      {
        hasBackdrop: true
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    })
  }

  showInfoModal(row: CompetitionModel) {

  }
}
