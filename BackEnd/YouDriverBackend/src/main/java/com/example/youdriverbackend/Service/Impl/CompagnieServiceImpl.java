package com.example.youdriverbackend.Service.Impl;

import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Repository.CompagnieRepository;
import com.example.youdriverbackend.Service.CompagnieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompagnieServiceImpl implements CompagnieService {

    @Autowired
    private CompagnieRepository compagnieRepository;

    @Override
    public Optional<Compagnie> getById(Long id) {
        return compagnieRepository.findById(id);
    }

    @Override
    public Compagnie save(Compagnie compagnie) {
        return compagnieRepository.save(compagnie);
    }

    @Override
    public Compagnie update(Compagnie compagnie, Long id) {
        return null;
    }
}
