import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http'
import { BookService } from './book.service';
import { DataTableComponent } from './data-table/data-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module'

//-----------Angular Material--------------------
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {AddBookDialogComponent} from './add-book-dialog/add-book-dialog.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ChildComponent } from './sharing/child/child.component';
import { ParentComponent } from './sharing/parent/parent.component';
import { RootComponent } from './sharing/root/root.component';
import { FormsComponent } from './material-design/forms/forms.component';
import { MatToolbarModule, MatListModule, MatOptionModule, MatSelectModule, MatGridListModule, MatRadioModule, MatNativeDateModule, MatCheckboxModule, MatCardModule, MatTabsModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DataTableComponent,
    AddBookDialogComponent,
    ChildComponent,
    ParentComponent,
    RootComponent,
    FormsComponent,
    DynamicFormComponent,
    ReactiveFormComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  entryComponents: [AddBookDialogComponent]
})
export class AppModule { }
