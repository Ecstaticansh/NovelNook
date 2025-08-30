package net.demo.bookapi.service;

import net.demo.bookapi.entities.entites;
import net.demo.bookapi.entities.users;
import net.demo.bookapi.repository.bookrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component

public class bookentryservice {
    @Autowired
    private bookrepo bookrepo;

    public void saveEntry(entites entites, users users){
        bookrepo.save(entites);
    }
    public List<entites> getall(){
        return bookrepo.findAll();
    }
    public Optional<entites> findbyId(String id){
        return bookrepo.findById(id);
    }
}
