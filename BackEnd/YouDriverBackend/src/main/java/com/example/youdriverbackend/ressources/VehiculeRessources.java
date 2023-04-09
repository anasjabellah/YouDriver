package com.example.youdriverbackend.ressources;


import com.example.youdriverbackend.Entity.Utilisateur;
import com.example.youdriverbackend.Entity.Vehicule;
import com.example.youdriverbackend.Service.VehiculeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(path = "compagnie")
public class VehiculeRessources {

    private VehiculeService vehiculeService;

    @Autowired
    public VehiculeRessources(VehiculeService vehiculeService) {
        this.vehiculeService = vehiculeService;
    }

    @PostMapping("/{id}/Vehicule/save")
    public Vehicule save(@RequestBody Vehicule vehicule ,@PathVariable("id") Long id){
        return vehiculeService.save(vehicule , id);
    }


    @GetMapping("compagnie/Vehicule/Type/{type}")
    public List<Vehicule> getByType(@PathVariable String type){
        return  vehiculeService.getAllByType(type);
    }



    @GetMapping("/{id}/Vehicules")
    @ResponseBody
    public List<Vehicule> getAllByCom(@PathVariable("id") Long id){
        return  vehiculeService.getAllByComp(id);
    }


    @GetMapping("/Vehicule/matricule/{Matricule}")
    @ResponseBody
    public Vehicule getByMatricule(@PathVariable("Matricule") String Matricule){
        return vehiculeService.getByMatricule(Matricule);
    }

    @GetMapping("/vehicule/{id}")
    @ResponseBody
    public Optional<Vehicule> getById(@PathVariable("id") Long id){
        return vehiculeService.getById(id);
    }


    @PutMapping("/vehicule/update/{id}")
    public Vehicule update(@RequestBody Vehicule vehicule,@PathVariable Long id ){
        return vehiculeService.update(vehicule , id);
    }


}
