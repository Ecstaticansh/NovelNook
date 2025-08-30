package net.demo.bookapi.service;

import net.demo.bookapi.entities.entites;
import net.demo.bookapi.entities.users;
import net.demo.bookapi.repository.userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import net.demo.bookapi.entities.users;
import org.springframework.stereotype.Service;


import net.demo.bookapi.entities.users;
import net.demo.bookapi.repository.userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class userservice {
    @Autowired
    private userrepo userrepo1;

    public void saveEntry(users users){
        userrepo1.save(users);
    }
    public List<users> getall(){
        return userrepo1.findAll();
    }
    public Optional<users> findbyId(String id) {
        return userrepo1.findById(id);
    }

        public users findbyusername(String username){
            return userrepo1.findByUsername(username);

        }
    }

