package com.example.youdriverbackend.Repository;
import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Offre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OffreRepository extends JpaRepository<Offre, Long> {

    List<Offre> findAllByCompagnie(Compagnie compagnie);
}
