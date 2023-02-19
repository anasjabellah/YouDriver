package com.example.youdriverbackend.Repository;

import com.example.youdriverbackend.Entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur , Long> {

    List<Utilisateur> findAllByName(String name);

    Utilisateur findByName(String userName);
}
