package com.example.youdriverbackend.Repository;
import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface VehiculeRepository extends JpaRepository<Vehicule, Long> {

    List<Vehicule> getAllByType(String type);

    List<Vehicule> getAllByCompagnie(Compagnie compagnie);

    Vehicule getByMatricule(String matricule);

}
