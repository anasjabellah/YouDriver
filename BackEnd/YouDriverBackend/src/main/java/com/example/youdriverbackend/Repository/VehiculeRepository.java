package com.example.youdriverbackend.Repository;
import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehiculeRepository extends JpaRepository<Vehicule, Long> {

    Vehicule getById(Long id);

    List<Vehicule> getAllByType(String type);

    List<Vehicule> getAllByCompagnie(Compagnie compagnie);

    Vehicule getByMatricule(String matricule);

}