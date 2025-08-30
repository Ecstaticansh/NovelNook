package net.demo.bookapi.repository;

import net.demo.bookapi.entities.entites;
import net.demo.bookapi.entities.users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface bookrepo extends MongoRepository<entites,String> {

}
