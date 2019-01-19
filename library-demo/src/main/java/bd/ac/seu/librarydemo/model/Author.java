package bd.ac.seu.librarydemo.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Author {
    private String authorName;
    private String country;
    private int age;
}
