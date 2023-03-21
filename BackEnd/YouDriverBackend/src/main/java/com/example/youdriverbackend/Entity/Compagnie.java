package com.example.youdriverbackend.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Compagnie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    private String nameCompagnie ;
    private String email ;
    private String tel ;
    private String address ;

    @OneToMany(mappedBy = "compagnie")
    @JsonIgnore
    List<Utilisateur> utilisateurList ;

}
