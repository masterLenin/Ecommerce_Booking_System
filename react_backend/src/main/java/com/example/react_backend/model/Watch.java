package com.example.react_backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Watch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String img;

    private String type;

    private String price;

    private String numOfCart;

    private String totalProducts;

    private String likedMe;
}
