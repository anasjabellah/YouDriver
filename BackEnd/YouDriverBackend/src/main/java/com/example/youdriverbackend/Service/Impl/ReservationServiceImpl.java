package com.example.youdriverbackend.Service.Impl;

import com.example.youdriverbackend.Entity.Compagnie;
import com.example.youdriverbackend.Entity.Offre;
import com.example.youdriverbackend.Entity.Reservation;
import com.example.youdriverbackend.Entity.Utilisateur;
import com.example.youdriverbackend.Repository.CompagnieRepository;
import com.example.youdriverbackend.Repository.OffreRepository;
import com.example.youdriverbackend.Repository.ReservationRepository;
import com.example.youdriverbackend.Repository.UtilisateurRepository;
import com.example.youdriverbackend.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepository reservationRepository ;

    @Autowired
    private UtilisateurRepository utilisateurRepository ;

    @Autowired
    private OffreRepository offreRepository ;

    @Autowired
    private CompagnieRepository compagnieRepository ;


    @Override
    public List<Reservation> ListByComp(Long id) {

        return reservationRepository.findReservationsByCompagnie_Id(id);
    }

    @Override
    public List<Reservation> ListByOffer(Long id) {
        return reservationRepository.findReservationsByOffre_Id(id);
    }

    @Override
    public Optional<Reservation> getOne(Long id) {
        return reservationRepository.findById(id);
    }

    @Override
    public Reservation save(Reservation reservation) {
        Offre offre = offreRepository.getReferenceById(reservation.getOffre().getId());
        Utilisateur utilisateur = utilisateurRepository.findUtilisateurById(reservation.getUtilisateur().getId());
        Compagnie compagnie = compagnieRepository.getById(reservation.getCompagnie().getId());

        if (
                reservation.getOffre() == null
                        && reservation.getUtilisateur() == null
                        && reservation.getCompagnie() == null
                        && reservation.getDate() == null
        ){
            System.out.println("message : reservtion is not good");
        }


        reservation.setOffre(offre);
        reservation.setCompagnie(compagnie);
        reservation.setUtilisateur(utilisateur);
        reservation.setDate(reservation.getDate());

        if(offre.getNmbrPlaces() == 0){
            return null ;
        }else {
            offre.setNmbrPlaces(offre.getNmbrPlaces() - 1 );
            return reservationRepository.save(reservation);
        }
    }

    @Override
    public Reservation update(Reservation reservation, Long id) {
        Reservation reservation1 = reservationRepository.getReferenceById(id);
        return reservationRepository.save(reservation);
    }

    @Override
    public void delete(Long id) {}

}
