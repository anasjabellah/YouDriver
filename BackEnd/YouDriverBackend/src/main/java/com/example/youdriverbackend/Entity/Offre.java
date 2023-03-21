package com.example.youdriverbackend.Entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter @Getter
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    private int nmbrPlaces ;
    private Date dateStart ;
    private Date dateEnd ;
    private String adresseDepart;
    private String adresseArivee;



    @ManyToOne
    @JoinColumn(name = "compangnie_id")
    private Compagnie compagnie ;

    @ManyToOne
    @JoinColumn(name = "vehicule_id")
    private Vehicule vehicule ;

}
