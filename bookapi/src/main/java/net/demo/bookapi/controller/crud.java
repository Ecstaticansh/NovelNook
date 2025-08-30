//package net.demo.bookapi.controller;
//import net.demo.bookapi.entities.entites;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/_ansh")
//public class crud {
//    private Map<Long, entites> entry=new HashMap<>();
//
//
//    @GetMapping
//    public List<entites> getAll() {
//
//        return new ArrayList<>(entry.values());
//    }
//
//
//    @PostMapping
//    public boolean createEntry(@RequestBody entites myentry){
//        entry.put(myentry.getId(), myentry);
//        return true;
//
//
//}}
