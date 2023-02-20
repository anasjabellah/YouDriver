package com.example.youdriverbackend.Entity;


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

    private String message ;


    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role ;


}
