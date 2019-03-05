export class Book {
    id: string;
    bookName: string;
    isnNumber: string;
    isbnNumber: string;
    author: Author[];
}

export class Author {
    name: string;
    country: string;    
}
