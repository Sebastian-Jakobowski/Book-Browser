import { Component } from '@angular/core';
import { Book } from '../models/book-model';
import { BookService } from '../services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCoverImageComponent } from '../components/dialog-cover-image/dialog-cover-image.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  books: Book[] | undefined;
  titleSearch!: string;


  constructor(private bookService: BookService, public dialog: MatDialog){
  }

  ngOnInit(): void {
  }

  showBooks(searchTerm: string): void {
    this.bookService.getBooks(searchTerm).then((books) => {
      this.books = Book.deserialize(books);
    })
    .catch((reason) => console.log(reason));
  }

  getCover(coverID: number, isThumbnail: boolean): string {
    return this.bookService.getCover(coverID, isThumbnail);
  }

  openDialog(coverID: number): void {
    this.dialog.open(DialogCoverImageComponent, {
      data: {coverID: coverID},
    });
  }
}