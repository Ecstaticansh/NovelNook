package net.demo.bookapi.entities;

import lombok.Data;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@Document("users")
public class users {


        @Id
        private String id;
        @Indexed(unique = true)
        @NonNull
        private String username;
        @NonNull
        private String password;

        @DBRef
        private List<entites> bookdetails = new ArrayList<>();}
