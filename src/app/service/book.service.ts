import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../model/Book.model';

@Injectable()
export class BookService {
    private bookListUrl : string = "http://henri-potier.xebia.fr/books";
    private commercialOffers: string = "http://henri-potier.xebia.fr/books/{book-isbns}/commercialOffers";

    constructor(private http: HttpClient) { 
    }

    public getBookList(): Observable<Array<Book>> {
        return this.http.get<Book[]>(this.bookListUrl);
    }
}