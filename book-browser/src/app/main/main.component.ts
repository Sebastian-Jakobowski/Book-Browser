import { Component } from '@angular/core';
import { Book } from '../models/book-model';
import { BookService } from '../services/book.service';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  books: Book[] | undefined;
  titleSearch!: string;


  constructor(private bookService: BookService){
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
    if(coverID) {
      if(isThumbnail && coverID){
        return environment.api.coversopenlibrary + "/b/id/" + coverID + "-S.jpg";
      } else {
        return environment.api.coversopenlibrary + "/b/id/" + coverID + "-L.jpg";
      }
    } else {
      return "https://www.lse.ac.uk/International-History/Images/Books/NoBookCover.png";
    }
  }

}
