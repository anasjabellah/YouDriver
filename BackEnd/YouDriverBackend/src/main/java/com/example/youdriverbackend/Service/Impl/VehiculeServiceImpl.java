package com.example.youdriverbackend.Service.Impl;

import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Vehicule;
import com.example.youdriverbackend.Repository.CompagnieRepository;
import com.example.youdriverbackend.Repository.VehiculeRepository;
import com.example.youdriverbackend.Service.VehiculeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public Vehicule update(Vehicule vehicule , Long id) {
        Vehicule vehicule1 = vehiculeRepository.findById(id).orElse(null);
        vehicule1.setMatricule(vehicule.getMatricule());
        vehicule1.setType(vehicule.getType());
        vehicule1.setNmbrPlaces(vehicule.getNmbrPlaces());
        return vehiculeRepository.save(vehicule1);
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

    @Override
    public Optional<Vehicule> getById(Long id) {
        return vehiculeRepository.findById(id);
    }


}
