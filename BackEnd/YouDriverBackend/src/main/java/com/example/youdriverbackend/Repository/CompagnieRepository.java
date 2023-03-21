package com.example.youdriverbackend.Repository;
import com.example.youdriverbackend.Entity.Compagnie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompagnieRepository extends JpaRepository<Compagnie, Long> {

    Compagnie getById(Long id);
}
