package com.example.youdriverbackend.Entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;

@Entity

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class Vehicule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    private String type ;
    private int nmbrPlaces ;
    private String matricule;
    private boolean isDisponible ;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "compagnie_id")
    private Compagnie compagnie ;
}
