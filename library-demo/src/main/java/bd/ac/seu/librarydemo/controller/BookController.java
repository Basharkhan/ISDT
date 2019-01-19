package bd.ac.seu.librarydemo.controller;

import bd.ac.seu.librarydemo.model.Book;
import bd.ac.seu.librarydemo.repo.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping("/")
public class BookController {
    @Autowired
    BookRepo bookRepo;

    @GetMapping("/getAllBooks")
    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveBook(@RequestBody Book book) {
        bookRepo.save(book);
        return ResponseEntity.status(HttpStatus.OK).body("Book Saved");
    }
}
