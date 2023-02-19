package com.example.youdriverbackend.Entity;

import lombok.*;

import javax.persistence.*;

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

    @OneToOne
    @JoinColumn(name = "utilisateur_id")
    private  Utilisateur utilisateur ;

    @ManyToOne
    @JoinColumn(name = "offre_id")
    private Offre offre ;

}
