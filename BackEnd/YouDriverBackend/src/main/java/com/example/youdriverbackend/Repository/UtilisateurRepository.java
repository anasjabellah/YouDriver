package com.example.youdriverbackend.Repository;

import com.example.youdriverbackend.Entity.Role;
import com.example.youdriverbackend.Entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur , Long> {

    List<Utilisateur> findAllByFirstName(String firstName);

    Utilisateur findByUserName(String userName);

    List<Utilisateur> getUtilisateursByCompagnieId(Long id);

    List<Utilisateur> findAllByRole(Role role);

    Utilisateur getById(Long id);
}
