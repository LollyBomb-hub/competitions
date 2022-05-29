import { Component, OnInit } from '@angular/core';
import {ColDef, GridReadyEvent} from "ag-grid-community";
import CompetitionModel from "../../models/CompetitionModel";

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
  public rowData: CompetitionModel[] = [
    new CompetitionModel("Соревнование 1", true, true),
    new CompetitionModel("Соревнование 2", true, false)
  ];
  public defaultColDef: ColDef = {
    width: 170,
    sortable: false,
  };

  public update() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
