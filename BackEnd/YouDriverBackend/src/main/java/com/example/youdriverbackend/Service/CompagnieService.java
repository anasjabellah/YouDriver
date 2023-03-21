package com.example.youdriverbackend.Service;

import com.example.youdriverbackend.Entity.Compagnie;

import java.util.Optional;

public interface CompagnieService {

    public Optional<Compagnie> getById(Long id);
    public Compagnie save(Compagnie compagnie);
    public Compagnie update(Compagnie compagnie , Long id);

}
