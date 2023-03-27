import { Component, ViewChild } from '@angular/core';
import { Book, BookModel } from '../models/book-model';
import { BookService } from '../services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCoverImageComponent } from '../components/dialog-cover-image/dialog-cover-image.component';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  books: Book[] | undefined;
  titleSearch!: string;
  pageSizeOptions = [10, 20, 50];
  pageStartIndex: number = 0;
  pageEndIndex: number = 50;
  viewStyle: string = "grid";
  displayedColumns: string[] = ['isbn', 'title', 'author_name', 'first_publish_year', 'cover_i'];
  dataSource!: MatTableDataSource<Book>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private bookService: BookService, public dialog: MatDialog){
  }

  ngOnInit(): void {
  }

  showBooks(searchTerm: string): void {
    this.bookService.getBooks(searchTerm).then((books) => {
      this.books = Book.deserialize(books);
      this.dataSource = new MatTableDataSource(this.books);
      setTimeout(() => this.dataSource.paginator = this.paginator);    
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

  handlePageEvent(e: PageEvent) {
    this.pageStartIndex = e.pageSize * e.pageIndex;
    this.pageEndIndex = this.pageStartIndex + e.pageSize;
  }
}