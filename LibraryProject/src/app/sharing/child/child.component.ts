import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  address: string;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<Student[]>();

  student: Student[] = [
    {id: 1, name: 'Bashar', address: 'Rajbary'},
    {id: 2, name: 'James', address: 'Sylet'},
    {id: 3, name: 'June', address: 'Rajshahi'},
    {id: 4, name: 'Jane', address: 'Magura'}
  ];

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.student);
  }

  ngOnInit() {
    
  }

}
