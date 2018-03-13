import { Component, OnInit } from '@angular/core';
import {Book} from '../model/Book.model';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: Array<Book>;
  public constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.bookService.getBookList().subscribe(books => {
      this.bookList = books;
    });
  }
}
