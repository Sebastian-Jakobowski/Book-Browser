import { Component, Inject, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookCoverL } from 'src/app/models/book-cover-l';

@Component({
  selector: 'app-dialog-cover-image',
  templateUrl: './dialog-cover-image.component.html',
  styleUrls: ['./dialog-cover-image.component.less']
})
export class DialogCoverImageComponent implements OnInit{
  coverImage!: string;

  constructor(private bookService: BookService,
    public dialogRef: MatDialogRef<DialogCoverImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookCoverL,
    )
  {}

  ngOnInit(): void {
    this.getCover();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  getCover() {
    this.coverImage = this.bookService.getCover(this.data.coverID, false);
  }
}
