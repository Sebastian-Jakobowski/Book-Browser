import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book-model'; 
import { BookService } from 'src/app/services/book.service';
import { DialogCoverImageComponent } from '../dialog-cover-image/dialog-cover-image.component';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.less']
})
export class GridViewComponent {
@Input() books: Book[] | undefined;
pageSizeOptions = [10, 20, 50];
pageStartIndex: number = 0;
pageEndIndex: number = 50;

constructor(private bookService: BookService, public dialog: MatDialog){
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
