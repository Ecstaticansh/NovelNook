package net.demo.bookapi.controller;

import net.demo.bookapi.entities.entites;
import net.demo.bookapi.entities.users;
import net.demo.bookapi.service.bookentryservice;
import net.demo.bookapi.service.userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.*;

@RestController
@RequestMapping("/ansh")
public class crudv2 {
@Autowired
    private bookentryservice ko;
@Autowired
private userservice userservice;


    @GetMapping
    public List<entites> getallentriesofuser(@PathVariable String userName) {
       users users=userservice.findbyusername(userName);
       List<entites> all=users.getBookdetails();
     return ko.getall();


    }


    @PostMapping("/{username}")
    public ResponseEntity<entites>createEntry(@RequestBody entites myentry, @PathVariable String userName){
        try {
            users users= userservice.findbyusername(userName);
            ko.saveEntry(myentry,users);
            return new ResponseEntity<>(myentry, HttpStatus.CREATED);
        } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }



}
  @GetMapping("id/{myid}")
    public ResponseEntity<entites> getbyid(@PathVariable String myid){
      Optional<entites>entry=ko.findbyId(myid);
      if (entry.isPresent()){
          return new ResponseEntity<>(entry.get(), HttpStatus.OK);
      }

      return new ResponseEntity<>( HttpStatus.NO_CONTENT);  }












}
