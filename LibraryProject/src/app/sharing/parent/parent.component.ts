import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent, Student } from '../child/child.component';

export interface Hello{
  id: string;
  name: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  message: Student[];
  hello: Hello[] = [
    {id: '1',  name: 'A'},
    {id: '2', name: 'B'}
  ]
  constructor() { }

  ngOnInit() {
    this.hello;
  }

  receiveMessage($event) {
    this.message = $event;
  }
}
