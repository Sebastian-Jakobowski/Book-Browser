import { Component } from '@angular/core';
import { Book } from '../models/book-model';
import { BookService } from '../services/book.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  books: Book[] | undefined;
  titleSearch!: string;
  viewStyle: string = "grid";
  dataSource!: MatTableDataSource<Book>;

  constructor(private bookService: BookService){
  }

  showBooks(searchTerm: string): void {
    this.bookService.getBooks(searchTerm).then((books) => {
      this.books = Book.deserialize(books);
      this.dataSource = new MatTableDataSource(this.books);
    })
    .catch((reason) => console.log(reason));
  }
}