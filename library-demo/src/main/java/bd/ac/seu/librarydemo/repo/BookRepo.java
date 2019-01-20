package bd.ac.seu.librarydemo.repo;

import bd.ac.seu.librarydemo.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookRepo extends MongoRepository<Book, String> {
    void deleteBookById(String id);
}
