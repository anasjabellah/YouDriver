package com.example.youdriverbackend.ressources;


import com.example.youdriverbackend.Entity.Vehicule;
import com.example.youdriverbackend.Service.VehiculeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "api/v1/")
public class VehiculeRessources {

    private VehiculeService vehiculeService;

    @Autowired
    public VehiculeRessources(VehiculeService vehiculeService) {
        this.vehiculeService = vehiculeService;
    }

    @PostMapping("compagnie/{id}/Vehicule/save")
    public Vehicule save(@RequestBody Vehicule vehicule , Long id){
        return vehiculeService.save(vehicule , id);
    }


    @GetMapping("compagnie/Vehicule/Type/{type}")
    public List<Vehicule> getByType(@PathVariable String type){
        return  vehiculeService.getAllByType(type);
    }



 //   @GetMapping("compagnie/Vehicules/isdisponible/{disponible}")
 //   @ResponseBody
   // public List<Vehicule> getAllBydisponible(@PathVariable("disponible") boolean disponible){
   //    return vehiculeService.disponible(disponible);
   // }


    @GetMapping("compagnie/{id}/Vehicules")
    @ResponseBody
    public List<Vehicule> getAllByCom(@PathVariable("id") Long id){
        return  vehiculeService.getAllByComp(id);
    }


    @GetMapping("compagnie/Vehicule/matricule={Matricule}")
    @ResponseBody
    public Vehicule getByMatricule(@PathVariable("Matricule") String Matricule){
        return vehiculeService.getByMatricule(Matricule);
    }



}
