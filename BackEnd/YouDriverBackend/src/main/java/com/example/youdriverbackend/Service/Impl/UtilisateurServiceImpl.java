package com.example.youdriverbackend.Service.Impl;

import com.example.youdriverbackend.Entity.Role;
import com.example.youdriverbackend.Entity.Utilisateur;
import com.example.youdriverbackend.Repository.RoleRepository;
import com.example.youdriverbackend.Repository.UtilisateurRepository;
import com.example.youdriverbackend.Service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UtilisateurServiceImpl  implements UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository ;

    @Autowired
    private RoleRepository roleRepository ;

    @Override
    public List<Utilisateur> findAll() {
        return utilisateurRepository.findAll();
    }

    @Override
    public Optional<Utilisateur> getOne(Long id) {
        return utilisateurRepository.findById(id);
    }

    @Override
    public Utilisateur save(Utilisateur utilisateur){
        if (
                utilisateur.getEmail() == null  ||
                utilisateur.getUserName() == null
        ){
            utilisateur.setMessage("your email and UserName  is a null :( ");
        }
        return utilisateurRepository.save(utilisateur);

    }

    @Override
    public Utilisateur update(Utilisateur utilisateur, Long id) {
        Utilisateur utilisateur1 = utilisateurRepository.findById(id).orElse(null);
        utilisateur1.setEmail(utilisateur.getEmail());
        utilisateur1.setAddress(utilisateur.getAddress());
        utilisateur1.setUserName(utilisateur.getUserName());
        utilisateur1.setTel(utilisateur.getTel());
        return utilisateurRepository.save(utilisateur1);
    }

    @Override
    public List<Utilisateur> getAllByName(String firstName) {
        return utilisateurRepository.findAllByFirstName(firstName);
    }

    @Override
    public Utilisateur getUserByName(String userName) {
        return utilisateurRepository.findByUserName(userName);
    }

    @Override
    public void addRoleToUser(Long idUser, Long RoelId) {
        Utilisateur utilisateur = utilisateurRepository.findById(idUser).orElse(null);
        Role role =  roleRepository.findById(RoelId).orElse(null);
        utilisateur.setRole(role);
    }

    @Override
    public List<Utilisateur> getAllByRole(String role) {
        Role role1 = roleRepository.findByNameRole(role);
        return utilisateurRepository.findAllByRole(role1);
    }

}
