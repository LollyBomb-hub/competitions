import { Component, OnInit } from '@angular/core';
import {ColDef, GridReadyEvent} from "ag-grid-community";

@Component({
  selector: 'app-competitions-list-page',
  templateUrl: './competitions-list-page.component.html',
  styleUrls: ['./competitions-list-page.component.css']
})
export class CompetitionsListPageComponent implements OnInit {
  public columnDefs: ColDef[] = [
    { field: "name", headerName: "Наименование", sortable: false},
    { field: "f1", headerName: "Field1" },
    { field: "f2", headerName: "Field2" }
  ];
  public rowData: any[] = [
    { "name": "gasg", "f1": "12", "f2": "22" }
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

  onGridReady(params: GridReadyEvent) {
    params.api.setColumnDefs(this.columnDefs);
    params.api.setRowData(this.rowData);
  }

}
