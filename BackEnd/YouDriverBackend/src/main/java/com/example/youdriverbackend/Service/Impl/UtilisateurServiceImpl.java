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

    private UtilisateurRepository utilisateurRepository ;

    private RoleRepository roleRepository ;

    @Autowired
    public UtilisateurServiceImpl(UtilisateurRepository utilisateurRepository , RoleRepository roleRepository){
        this.roleRepository = roleRepository ;
        this.utilisateurRepository = utilisateurRepository ;
    }

    @Override
    public List<Utilisateur> findAll() {
        return utilisateurRepository.findAll();
    }

    @Override
    public Optional<Utilisateur> getOne(Long id) {
        return utilisateurRepository.findById(id);
    }

    @Override
    public Utilisateur save(Utilisateur utilisateur , Long idRole){
        if (
                utilisateur.getEmail() == null  ||
                utilisateur.getUserName() == null
        ){
            utilisateur.setMessage("your email and UserName  is a null :( ");
        }
        addRoleToUser(utilisateur.getId() , idRole);
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
    public List<Utilisateur> getAllByName(String name) {
        return utilisateurRepository.findAllByName(name);
    }

    @Override
    public Utilisateur getUserByName(String userName) {
        return utilisateurRepository.findByName(userName);
    }

    @Override
    public void addRoleToUser(Long idUser, Long RoelId) {
        Utilisateur utilisateur = utilisateurRepository.findById(idUser).orElse(null);
        Role role =  roleRepository.findById(RoelId).orElse(null);
        utilisateur.setRole(role);
    }

    @Override
    public List<Utilisateur> getAllByRole(String role) {
        return utilisateurRepository.findByRole(role);
    }

}
