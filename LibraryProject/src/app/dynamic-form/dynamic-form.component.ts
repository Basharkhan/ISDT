import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  academicProgram: string;
  programLimit: number;
  currentCount: number;  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {academicProgram: 'Bsc in CSE', programLimit: null, currentCount: 5},
  {academicProgram: 'Bsc in EEE', programLimit: null, currentCount: 5},
  {academicProgram: 'Bsc in TEXTILE', programLimit: null, currentCount: 5},
  {academicProgram: 'BBA', programLimit: null, currentCount: 5},
  {academicProgram: 'MBA', programLimit: null, currentCount: 5},
  {academicProgram: 'ENGLISH', programLimit: null, currentCount: 5},
  {academicProgram: 'ECONOMICS', programLimit: null, currentCount: 5},
];

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  displayedColumns: string[] = ['select', 'academicProgram', 'programLimit', 'currentCount'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
    
  constructor() { }

  ngOnInit() {
    
  }
  
  rowClicked(row) {
    if(this.selection.isSelected(row)) {
      console.log(row);
    }
  }

}
