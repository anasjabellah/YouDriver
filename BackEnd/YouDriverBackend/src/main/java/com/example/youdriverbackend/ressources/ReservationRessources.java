package com.example.youdriverbackend.ressources;


import com.example.youdriverbackend.Entity.Reservation;
import com.example.youdriverbackend.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/")
public class ReservationRessources {

    @Autowired
    private ReservationService reservationService ;


    @GetMapping("/compagnie/{id}/reservations")
    public List<Reservation> findAllByComp(@PathVariable("id") Long id) {
        return reservationService.ListByComp(id);
    }

    @GetMapping("/compagnie/reservation/{id}")
    public Optional<Reservation> getByid(@PathVariable("id") Long id){
        return reservationService.getOne(id);
    }


    @PostMapping("/compagnie/reservation/add")
    public Reservation save(@RequestBody Reservation reservation){
        return reservationService.save(reservation);
    }


}
