package bd.ac.seu.librarydemo;

import bd.ac.seu.librarydemo.model.Author;
import bd.ac.seu.librarydemo.model.Book;
import bd.ac.seu.librarydemo.repo.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class LibraryDemoApplication {

	@Autowired
	BookRepo bookRepo;

	public static void main(String[] args) {
		SpringApplication.run(LibraryDemoApplication.class, args);
	}

	@Bean
	CommandLineRunner runner () {
		return args -> {
			Book book = new Book("Numerical Method", "10:20:30", "20:30:40",
					Arrays.asList(new Author("S.BALACHANDRA RAO", "India", 50),
							new Author("C.K SHANTA", "India", 40)));
			Book book1 = new Book("Aguner Poroshmoni", "10:20", "20:30",
					Arrays.asList(new Author("Humayun Ahmed", "Bangladesh", 62),
									new Author("AbcDef", "Bangladesh", 60)));
			Book book2 = new Book("Jolomanob", "10:20", "20:30",
					Arrays.asList(new Author("Zafar Iqbal", "Bangladesh", 60)));
			Book book3 = new Book("Prothom Alo", "10:20", "20:30",
					Arrays.asList(new Author("Shunil Gongopaddhay", "Bangladesh", 78)));
			Book book4 = new Book("Computer Programming", "10:20", "20:30",
					Arrays.asList(new Author("Tamim Shahriar", "Bangladesh", 30)));
			bookRepo.save(book);
			bookRepo.save(book1);
			bookRepo.save(book2);
			bookRepo.save(book3);
			bookRepo.save(book4);
		};
	}

}

