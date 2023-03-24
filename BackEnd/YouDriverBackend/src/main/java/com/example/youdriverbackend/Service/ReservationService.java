package com.example.youdriverbackend.Service;

import com.example.youdriverbackend.Entity.Reservation;

import java.util.List;
import java.util.Optional;

public interface ReservationService {

    List<Reservation> ListByComp(Long id);

    Optional<Reservation> getOne(Long id);
    Reservation save(Reservation reservation);

    Reservation update(Reservation reservation , Long id);

    void delete(Long id);

}
