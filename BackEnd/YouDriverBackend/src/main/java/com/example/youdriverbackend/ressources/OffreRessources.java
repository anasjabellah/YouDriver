package com.example.youdriverbackend.ressources;


import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Offre;
import com.example.youdriverbackend.Entity.Vehicule;
import com.example.youdriverbackend.Service.OffreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(path = "compagnie")
public class OffreRessources {

    @Autowired
    private OffreService offreService;

    @GetMapping("/offer/{id}")
    public Optional<Offre> getByid(@PathVariable Long id){
        return offreService.getOne(id);
    }

    @GetMapping("/{id}/offers")
    public List<Offre> getAllByComp(@PathVariable("id") Long id){
        return offreService.getAll(id);
    }

    @GetMapping("/offers")
    public List<Offre> getAllOffers(){
        return offreService.getAllOffer();
    }

    @PostMapping("/{id}/offer/save")
    public Offre save(@RequestBody Offre offre , @PathVariable Long id){
        return offreService.save(offre,id);
    }
}
