package com.example.youdriverbackend.Repository;

import com.example.youdriverbackend.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
