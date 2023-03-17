package com.example.youdriverbackend.Service;

import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Vehicule;

import java.util.List;

public interface VehiculeService {

    public Vehicule save(Vehicule vehicule , Long id);

    public  Vehicule update(Vehicule vehicule);

    public List<Vehicule> getAllByType(String type);

    public List<Vehicule> getAllByComp(Long id);

    public Vehicule getByMatricule(String matricule);

}
