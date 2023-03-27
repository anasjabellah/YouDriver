package com.example.youdriverbackend.Repository;
import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Offre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OffreRepository extends JpaRepository<Offre, Long> {
    List<Offre> getAllByCompagnie(Compagnie compagnie);

    List<Offre>  getAllByCompagnieId(Long id);
}
