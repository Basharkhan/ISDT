import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddBookDialogComponent } from '../add-book-dialog/add-book-dialog.component';

export interface PeriodicElement {
  bookName: string;
  isnNumber: string;
  isbnNumber: string;  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {bookName: "A", isnNumber: 'Hydrogen', isbnNumber: "A"},
  {bookName: "B", isnNumber: 'Hydrogen', isbnNumber: "A"},
  {bookName: "C", isnNumber: 'Hydrogen', isbnNumber: "A"},
  {bookName: "D", isnNumber: 'Hydrogen', isbnNumber: "A"},
  {bookName: "E", isnNumber: 'Hydrogen', isbnNumber: "A"},
  {bookName: "F", isnNumber: 'Hydrogen', isbnNumber: "A"},
  {bookName: "G", isnNumber: 'Hydrogen', isbnNumber: "A"},
  {bookName: "H", isnNumber: 'Hydrogen', isbnNumber: "A"},
  {bookName: "I", isnNumber: 'Hydrogen', isbnNumber: "A"},
  {bookName: "J", isnNumber: 'Hydrogen', isbnNumber: "A"},
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
//  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['bookName', 'isnNumber', 'isbnNumber'];    
  books: Book[] = [];
  dataSource = new MatTableDataSource<Book>();
  data = Object.assign(this.books);  
  constructor(private bookService: BookService, private dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
    
  ngOnInit() {
    this.getBooks();
    this.dataSource.paginator = this.paginator;    
//    this.dataSource.sort = this.sort;
  }

  getBooks() {
    this.bookService.getAllBooks()
        .subscribe(data => {
//          this.books = data;
          this.dataSource.data = data;
          console.log("Success!", this.books);
        }, err => console.log(err))
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddBookDialogComponent, dialogConfig);
  }

}
