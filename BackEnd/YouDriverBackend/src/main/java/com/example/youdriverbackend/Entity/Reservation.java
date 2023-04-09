package com.example.youdriverbackend.Entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date ;

    @OneToOne
    @JoinColumn(name = "utilisateur_id")
    private  Utilisateur utilisateur ;

    @ManyToOne
    @JoinColumn(name = "offre_id")
    private Offre offre ;

    @ManyToOne
    @JoinColumn(name = "compagnie_id")
    private Compagnie compagnie ;

}
