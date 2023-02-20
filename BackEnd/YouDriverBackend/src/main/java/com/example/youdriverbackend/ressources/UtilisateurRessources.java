package com.example.youdriverbackend.ressources;


import com.example.youdriverbackend.Entity.Utilisateur;
import com.example.youdriverbackend.Service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/Utilisateurs")
public class UtilisateurRessources {


   private UtilisateurService utilisateurService ;

   @Autowired
   public UtilisateurRessources(UtilisateurService utilisateurService){
       this.utilisateurService = utilisateurService ;
   };

    @GetMapping(path = "/")
   public List<Utilisateur>  findAll(){
       return  utilisateurService.findAll();
   }

    @GetMapping("/names/{name}")
    public List<Utilisateur> findAllByName(@PathVariable String name) {
        return utilisateurService.getAllByName(name);
    }

    @GetMapping("name/{name}")
    public  Utilisateur getUserByName(@PathVariable String name){
        return utilisateurService.getUserByName(name);
    }

    @GetMapping("/id/{id}")
    public Optional<Utilisateur> getOne(@PathVariable Long id) {
        return utilisateurService.getOne(id);
    }


    @GetMapping("role/{roleName}")
    public List<Utilisateur>  getAllByRole(@PathVariable String roleName){
        return  utilisateurService.getAllByRole(roleName);
    }

    @PostMapping("user/save/{id}")
    public Utilisateur save(@RequestBody Utilisateur utilisateur , @PathVariable Long id){
        return utilisateurService.save(utilisateur , id);
    }


    @PutMapping("/update/{id}")
    public   Utilisateur update(@RequestBody Utilisateur utilisateur , @PathVariable Long id ){
        return utilisateurService.update(utilisateur , id);
    }




}
