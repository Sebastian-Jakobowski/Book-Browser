import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { DialogCoverImageComponent } from '../dialog-cover-image/dialog-cover-image.component';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/book-model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.less']
})
export class ListViewComponent implements OnInit {
  @Input() books: Book[] | undefined;
  @Input() dataSource!: MatTableDataSource<Book>;
  pageSizeOptions = [10, 20, 50];
  displayedColumns: string[] = ['title', 'author_name', 'first_publish_year', 'cover_i', 'isbn'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private bookService: BookService, public dialog: MatDialog){
  }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator); 
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
