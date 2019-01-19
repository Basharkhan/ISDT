import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BookComponent } from './book/book.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/data-table', pathMatch: 'full'},
  { path: 'books', component: BookComponent },
  { path: 'data-table', component: DataTableComponent }
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
