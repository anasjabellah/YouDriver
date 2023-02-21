package com.example.youdriverbackend.Service;


import com.example.youdriverbackend.Entity.Utilisateur;

import java.util.List;
import java.util.Optional;

public interface UtilisateurService {

    public List<Utilisateur> findAll();

    public Optional<Utilisateur> getOne(Long id);

    public Utilisateur save(Utilisateur utilisateur );

    public Utilisateur update(Utilisateur utilisateur , Long id);

    public List<Utilisateur>  getAllByName(String firstName);

    public  Utilisateur getUserByName(String userName);

    public List<Utilisateur> getAllByRole(String role);

    void addRoleToUser(Long idUser,Long RoelId);

}
