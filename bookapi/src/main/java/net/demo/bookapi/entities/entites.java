package net.demo.bookapi.entities;

import lombok.Data;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.lang.NonNullFields;
import org.springframework.validation.annotation.Validated;

import java.util.Date;
@Data
@Document("ansh_collection")
public class entites {
    @Id
    private String id;
    @NonNull
    private String title;
    private String author;
    private Date date;
    private int price;


}
