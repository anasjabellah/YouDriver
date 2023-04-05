package com.example.youdriverbackend.Entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter @Getter
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    private String firstName ;
    private String lastName ;
    private String userName ;
    private String email ;
    private String password ;
    private String tel ;
    private String address ;


    @ManyToOne
    @JoinColumn(name = "compagnie_id")
    @JsonIgnore 
    private Compagnie compagnie ;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role ;



}
