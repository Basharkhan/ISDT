import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];
  filteredBooks: Book[];
  private _searchTerm: string;
  bookEntryForm: FormGroup;
  successMsg: any;
  errorMsg: any;
  selectedBook: Book;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredBooks = this.filterBooks(value);
  }

  filterBooks(searchString: string) {
    return this.books.filter(book =>
      book.bookName.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  constructor(private bookService: BookService, private formBuilder: FormBuilder) { }

  ngOnInit() {            
    this.bookEntryForm = this.formBuilder.group({
      bookName: [''],
      isnNumber: [''],
      isbnNumber: [''],
      author: this.formBuilder.array([this.formBuilder.group({authorName: '', country: '', age: ''})])
    });
    this.getBooks();
  }    

  get author() {
    return this.bookEntryForm.get('author') as FormArray;
  }

  addAuthor() {
    this.author.push(this.formBuilder.group({authorName: '', country: '', age: ''}))
  }

  onSubmit() {
    console.log(this.bookEntryForm.value);
    this.bookService.saveBook(this.bookEntryForm.value)
        .subscribe(
          res => {
            this.successMsg = res;
            this.bookEntryForm.reset();
            console.log(res);
          }, err => {
            this.errorMsg = err;
            console.log("hello");
          }
        )
  }

  getBooks() {
    this.bookService.getAllBooks()
    .subscribe(
      data => {
        this.books = data,
        this.filteredBooks = data,
        console.log(this.books)
      }, err => console.log(err)
    )
  }

  onSelect(selectedItem: any) {
    this.selectedBook = selectedItem;
    console.log(this.selectedBook);
    console.log("Selected item Id: ", selectedItem.id);
  }  

}
