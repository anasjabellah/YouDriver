package com.example.youdriverbackend.Service.Impl;

import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Offre;
import com.example.youdriverbackend.Repository.CompagnieRepository;
import com.example.youdriverbackend.Repository.OffreRepository;
import com.example.youdriverbackend.Service.OffreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OffreServiceImpl  implements OffreService {

    @Autowired
    private OffreRepository offreRepository ;

    @Autowired
    private CompagnieRepository compagnieRepository ;

    @Override
    public Optional<Offre> getOne(long id) {
        return offreRepository.findById(id);
    }

    @Override
    public List<Offre> getAllOffer() {
        return offreRepository.findAll();
    }

    @Override
    public List<Offre> getAll(long id) {
        Compagnie compagnie = compagnieRepository.getById(id);
        return offreRepository.getAllByCompagnieId(id);
    }

    @Override
    public Offre save(Offre offre) {
        return null;
    }
}
