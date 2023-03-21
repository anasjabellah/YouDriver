package com.example.youdriverbackend.ressources;


import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Service.CompagnieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/")
public class CompagnieRessources {

    @Autowired
    private CompagnieService compagnieService ;

    @PostMapping("compagnie/save")
    public Compagnie save(@RequestBody Compagnie compagnie){
        return compagnieService.save(compagnie);
    }


    @GetMapping("compagnie/{id}")
    public Optional<Compagnie> getByid(@PathVariable Long id){
        return compagnieService.getById(id);
    }




}
