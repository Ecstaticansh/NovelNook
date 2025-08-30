package net.demo.bookapi.controller;

import net.demo.bookapi.entities.entites;
import net.demo.bookapi.entities.users;
import net.demo.bookapi.service.bookentryservice;
import net.demo.bookapi.service.userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class users1 {

    @Autowired
    private userservice userservice;

    @GetMapping
    public List<users>getallusers(){
        return userservice.getall();
    }

@PostMapping
    public void createuser(@RequestBody users users){
        userservice.saveEntry(users);
}
@PutMapping("/{username}")
    public  ResponseEntity<?>updateuser(@RequestBody users user, @PathVariable String username){

         users userindb=userservice.findbyusername(username);
         if(userindb!= null){
             userindb.setUsername(user.getUsername());
             userindb.setPassword(user.getPassword());
             userservice.saveEntry(userindb);
         }
         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


















}
