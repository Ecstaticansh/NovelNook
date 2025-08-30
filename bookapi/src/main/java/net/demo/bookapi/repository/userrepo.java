package net.demo.bookapi.repository;


import net.demo.bookapi.entities.entites;
import net.demo.bookapi.entities.users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface userrepo extends MongoRepository<users,String> {
    users findByUsername(String username); // ✅ RIGHT

}
