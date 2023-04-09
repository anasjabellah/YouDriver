package com.example.youdriverbackend.Service;

import com.example.youdriverbackend.Entity.Offre;

import java.util.List;
import java.util.Optional;

public interface OffreService {

    public Optional<Offre> getOne(long id);

    public List<Offre> getAllOffer();
    public List<Offre> getAll(long id);
    public Offre save(Offre offre , Long id);


}
