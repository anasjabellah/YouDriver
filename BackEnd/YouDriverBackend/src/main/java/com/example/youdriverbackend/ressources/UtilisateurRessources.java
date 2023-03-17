package com.example.youdriverbackend.ressources;


import com.example.youdriverbackend.Entity.Utilisateur;
import com.example.youdriverbackend.Service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/")
public class UtilisateurRessources {


   private UtilisateurService utilisateurService ;

   @Autowired
   public UtilisateurRessources(UtilisateurService utilisateurService){
       this.utilisateurService = utilisateurService ;
   };

    @GetMapping(path = "Utilisateurs")
   public List<Utilisateur>  findAll(){
       return  utilisateurService.findAll();
   }

    @GetMapping("/names/{name}")
    public List<Utilisateur> findAllByName(@PathVariable String name) {
        return utilisateurService.getAllByName(name);
    }

    @GetMapping("Utilisateurs/name/{name}")
    public  Utilisateur getUserByName(@PathVariable String name){
        return utilisateurService.getUserByName(name);
    }

    @GetMapping("Utilisateurs/id/{id}")
    public Optional<Utilisateur> getOne(@PathVariable Long id) {
        return utilisateurService.getOne(id);
    }


    @GetMapping("Utilisateurs/role/{roleName}")
    public List<Utilisateur>  getAllByRole(@PathVariable String roleName){
        return  utilisateurService.getAllByRole(roleName);
    }

    @PostMapping("Utilisateurs/user/save")
    public Utilisateur save(@RequestBody Utilisateur utilisateur){
        return utilisateurService.save(utilisateur);
    }


    @PutMapping("Utilisateurs/update/{id}")
    public   Utilisateur update(@RequestBody Utilisateur utilisateur , @PathVariable Long id ){
        return utilisateurService.update(utilisateur , id);
    }



    @GetMapping("Compagnie/{id}/Utilisateurs/")
    public List<Utilisateur>  getAllByCompagnie(@PathVariable Long id){
        return  utilisateurService.getUtilisateurByCompagnie(id);
    }




}
