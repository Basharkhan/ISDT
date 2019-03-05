import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { MatTableDataSource } from '@angular/material';

export interface Animal {
  name: string;
  sound: string;
}

export interface MobileNo {
  contactType: string;
  countryCode: string;
  areaCode: string;
  number: string;
  extention: string;
}

export interface PhoneType {
  id: number;
  name: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{

  nameFilter = new FormControl('');
  idFilter = new FormControl('');
  colourFilter = new FormControl('');
  petFilter = new FormControl('');

  filterValues = {
    name: '',
    id: '',
    colour: '',
    pet: ''
  };

  people = [
    {
      name: 'John',
      id: 1,
      colour: 'Green',
      pet: 'Dog'
    },
    {
      name: 'Sarah',
      id: 2,
      colour: 'Purple',
      pet: 'Cat'
    },
    {
      name: 'Lindsay',
      id: 3,
      colour: 'Blue',
      pet: 'Lizard'
    },
    {
      name: 'Megan',
      id: 4,
      colour: 'Orange',
      pet: 'Dog'
    }
  ];

  dataSource = new MatTableDataSource();
  columnsToDisplay = ['name', 'id', 'favouriteColour', 'pet'];

  constructor() {
    this.dataSource.data = this.people;
    this.dataSource.filterPredicate = this.tableFilter();
  }

  ngOnInit() {
    this.nameFilter.valueChanges
    .subscribe(
      name => {
        this.filterValues.name = name;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
  this.idFilter.valueChanges
    .subscribe(
      id => {
        this.filterValues.id = id;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
  this.colourFilter.valueChanges
    .subscribe(
      colour => {
        this.filterValues.colour = colour;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
  this.petFilter.valueChanges
    .subscribe(
      pet => {
        this.filterValues.pet = pet;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )    
  } // ------ ng init end ------

  tableFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function(data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.name.toLowerCase().indexOf(searchTerms.name) !== -1
        && data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1
        && data.colour.toLowerCase().indexOf(searchTerms.colour) !== -1
        && data.pet.toLowerCase().indexOf(searchTerms.pet) !== -1;
    }
    return filterFunction;
  } 

}
