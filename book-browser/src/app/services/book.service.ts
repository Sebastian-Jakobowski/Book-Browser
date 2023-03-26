import { Injectable } from '@angular/core';
import { BookModel } from '../models/book-model';
import axios from "axios";
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(title: string): Promise<BookModel[]>{
    return new Promise<BookModel[]>(((resolve, reject) => {
      axios.get(`${environment.api.openlibrary}/search.json`, {
        params: {
          title: title,
        },
      }).then((axiosResponse) => {
        resolve(axiosResponse.data.docs as BookModel[])
      }).catch((reason: any) => {
        reject(reason);
      })
    }))
  }
}