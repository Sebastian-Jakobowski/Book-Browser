export interface BookModel {
    isbn: string;
    title: string;
    first_publish_year: number;
    cover_i: number;
    author_name: string;
}

export class Book implements BookModel {
    isbn!: string;
    title!: string;
    first_publish_year!: number;
    cover_i!: number;
    author_name!: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    static deserialize(books: BookModel[]): Book[] {
        let result: Book[] = [];
        books.forEach((value, index) => (result[index] = new Book().deserialize(value)));
        return result;
    }
}