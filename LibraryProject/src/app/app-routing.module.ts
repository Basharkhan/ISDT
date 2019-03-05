import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BookComponent } from './book/book.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AddBookDialogComponent } from './add-book-dialog/add-book-dialog.component';
import { ChildComponent } from './sharing/child/child.component';
import { ParentComponent } from './sharing/parent/parent.component';
import { RootComponent } from './sharing/root/root.component';
import { FormsComponent } from './material-design/forms/forms.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/reactive-form', pathMatch: 'full'},
  { path: 'books', component: BookComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: 'add-book', component: AddBookDialogComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'root', component: RootComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'new-form', component: DynamicFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
    
  ],
  declarations: []
})
export class AppRoutingModule { }
