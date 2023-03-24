package com.example.youdriverbackend.ressources;


import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Offre;
import com.example.youdriverbackend.Service.OffreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/")
public class OffreRessources {

    @Autowired
    private OffreService offreService;

    @GetMapping("compagnie/offer/{id}")
    public Optional<Offre> getByid(@PathVariable Long id){
        return offreService.getOne(id);
    }

    @GetMapping("compagnie/{id}/offers")
    public List<Offre> getAllByComp(@PathVariable("id") Long id){
        return offreService.getAll(id);
    }

    @GetMapping("compagnie/offers")
    public List<Offre> getAllOffers(){
        return offreService.getAllOffer();
    }
}
