import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-root',
  template: `
    // Root: {{message}}
    // <app-parent></app-parent>
  `,
  styleUrls: ['./root.component.css']
})
export class RootComponent implements AfterViewInit {
  // @ViewChild(ParentComponent) parent;
  // message: string;
  constructor() { }

  ngAfterViewInit() {
    // this.message = this.parent.message;
  }

}
