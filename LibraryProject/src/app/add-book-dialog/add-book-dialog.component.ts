import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css']
})
export class AddBookDialogComponent implements OnInit {
  bookForm: FormGroup;
  book: Book = new Book();
  constructor(private formBuilder: FormBuilder, 
              private bookService: BookService,
              public dialogRef: MatDialogRef<AddBookDialogComponent>
              ) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      bookName: [this.book.bookName, [Validators.required]],
      isnNumber: [this.book.isnNumber, [Validators.required]],
      isbnNumber: [this.book.isbnNumber, [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.bookForm.value);
    this.bookService.saveBook(this.bookForm.value)
        .subscribe( res=> {
          this.onClose();
        })
  }

  onClose() {
    this.bookForm.reset();
    this.dialogRef.close();
  }

}
