package bd.ac.seu.librarydemo.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Document(collection = "Book")
public class Book {
    private String id;
    private String bookName;
    private String isnNumber;
    private String isbnNumber;
    private List<Author> author;

    public Book(String bookName, String isnNumber, String isbnNumber, List<Author> author) {
        this.bookName = bookName;
        this.isnNumber = isnNumber;
        this.isbnNumber = isbnNumber;
        this.author = author;
    }
}
