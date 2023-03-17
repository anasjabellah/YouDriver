package com.example.youdriverbackend.Service.Impl;

import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Vehicule;
import com.example.youdriverbackend.Repository.CompagnieRepository;
import com.example.youdriverbackend.Repository.VehiculeRepository;
import com.example.youdriverbackend.Service.VehiculeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiculeServiceImpl implements VehiculeService {

    @Autowired
    private VehiculeRepository vehiculeRepository;

    @Autowired
    private CompagnieRepository compagnieRepository ;

    @Override
    public Vehicule save(Vehicule vehicule , Long id) {
        Compagnie compagnie = compagnieRepository.getById(id);
        vehicule.setCompagnie(compagnie);
        return  vehiculeRepository.save(vehicule);
    }

    @Override
    public Vehicule update(Vehicule vehicule) {
        return null;
    }

    @Override
    public List<Vehicule> getAllByType(String type) {
        return vehiculeRepository.getAllByType(type);
    }

    @Override
    public List<Vehicule> getAllByComp(Long id) {
        Compagnie compagnie = compagnieRepository.getById(id);
        return vehiculeRepository.getAllByCompagnie(compagnie);
    }

    @Override
    public Vehicule getByMatricule(String matricule) {
        return vehiculeRepository.getByMatricule(matricule);
    }



}
