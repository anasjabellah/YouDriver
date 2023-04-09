package com.example.youdriverbackend.Repository;
import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Offre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface OffreRepository extends JpaRepository<Offre, Long> {
    List<Offre> getAllByCompagnie(Compagnie compagnie);

    List<Offre>  getAllByCompagnieId(Long id);
}
