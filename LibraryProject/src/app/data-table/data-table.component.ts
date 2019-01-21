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

  displayedColumns: string[] = ['bookName', 'isnNumber', 'isbnNumber', 'author', '#'];    
  books: Book[] = [];
  selectedBook: Book;
  dataSource = new MatTableDataSource<Book>();
  data = Object.assign(this.books);  
  constructor(private bookService: BookService,
              private dialog: MatDialog,
//              private diaLogComponent: AddBookDialogComponent
              ) { }

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

  // onEdit(book: Book) {    
  //   this.diaLogComponent.populateForm(book);
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = false;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '600px';
  //   this.dialog.open(AddBookDialogComponent, dialogConfig);
  // }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    this.dialog.open(AddBookDialogComponent, dialogConfig);
  }

  confirmDelete(item) {
    this.bookService.deleteBook(item.id)
        .subscribe( res => {
          const index = this.dataSource.data.indexOf(item);
          this.dataSource.data.splice(index, 1);
          this.dataSource.data = this.dataSource.data.filter(event => event.id != item.id);
          this.dataSource = new MatTableDataSource(this.dataSource.data)          
        }, err => console.log(err))
  }

  onSelect(book: any) {    
    this.selectedBook = book;
    console.log(this.selectedBook);
  }

}
