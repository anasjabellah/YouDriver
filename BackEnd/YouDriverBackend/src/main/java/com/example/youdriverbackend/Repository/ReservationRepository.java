package com.example.youdriverbackend.Repository;

import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation>  findReservationsByCompagnie_Id(long id);

    List<Reservation> findReservationsByOffre_Id(long id);
}
