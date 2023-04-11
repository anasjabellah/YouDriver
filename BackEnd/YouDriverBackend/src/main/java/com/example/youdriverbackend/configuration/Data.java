/*package com.example.youdriverbackend.configuration;*/

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
/*import org.springframework.security.crypto.password.PasswordEncoder;
import org.youbooking.root.entities.Address;
import org.youbooking.root.entities.AppUser;
import org.youbooking.root.entities.Attachment;
import org.youbooking.root.entities.Bed;
import org.youbooking.root.entities.BedRoom;
import org.youbooking.root.entities.Hotel;
import org.youbooking.root.entities.Role;
import org.youbooking.root.enums.BedRoomStateEnum;
import org.youbooking.root.enums.BedTypeEnum;
import org.youbooking.root.enums.HotelStateEnum;
import org.youbooking.root.enums.RoleEnum;
import org.youbooking.root.repositories.AddressRepository;
import org.youbooking.root.repositories.AttachmentRepository;
import org.youbooking.root.repositories.BedRepository;
import org.youbooking.root.repositories.BedRoomRepository;
import org.youbooking.root.repositories.HotelRepository;
import org.youbooking.root.repositories.RoleRepository;
import org.youbooking.root.repositories.UserRepository;


import jakarta.transaction.Transactional;*/
import java.util.List;
import java.util.Set;

/*
@Configuration @Transactional @RequiredArgsConstructor
public class Data {
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final BedRoomRepository bedRoomRepository;
    private final BedRepository bedRepository;
    private final AddressRepository addressRepository;
    private final AttachmentRepository attachmentRepository;
    private final HotelRepository hotelRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean @Transactional
    public void insertSomeData(){
        Role adminRole = new Role(RoleEnum.ADMIN);
        Role clientRole = new Role(RoleEnum.CLIENT);
        Role hotelOwnerRole = new Role(RoleEnum.HOTEL_OWNER);
        roleRepository.saveAll(List.of(adminRole,clientRole,hotelOwnerRole));

        AppUser user = new AppUser("simoxCoder2002", passwordEncoder.encode("pass123@"), "Mohamed Cherkaoui","0619377346","EE773HH",clientRole);
        userRepository.save(user);

        BedRoom bedRoom1= new BedRoom("A1",20F, BedRoomStateEnum.AVAILABLE);
        BedRoom bedRoom2= new BedRoom("B1",25F, BedRoomStateEnum.AVAILABLE);

        Bed bed1 = new Bed(BedTypeEnum.EXTRA_LARGE_DOUBLE);
        Bed bed2 = new Bed(BedTypeEnum.STANDARD_SINGLE);
        Bed bed3 = new Bed(BedTypeEnum.LARGE_DOUBLE);
        Bed bed4 = new Bed(BedTypeEnum.LARGE_SINGLE);
        bedRepository.saveAll(List.of(bed1,bed2,bed3,bed4));

        bedRoom2.setBeds(Set.of(bed1,bed2));
        bedRoom1.setBeds(Set.of(bed3,bed4));
        bedRoomRepository.saveAll(List.of(bedRoom1,bedRoom2));

        Address address = new Address("Gueliz street , Macdonalds road N123 Marrakesh");
        addressRepository.save(address);

        Attachment attachment1 = new Attachment("Hotel Entrance","This The Main Hotel From Outside Image","https://elinsignia.com/wp-content/uploads/2019/06/1246280_1606101711004339170");
        Attachment attachment2 = new Attachment("Hotel External Body","This is what looks like inside","https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=");
        attachmentRepository.saveAll(List.of(attachment1,attachment2));

        Hotel hotel = new Hotel("Mamounia",Set.of(bedRoom1,bedRoom2),address, HotelStateEnum.OPEN,user);
        hotel.setAttachments(Set.of(attachment1,attachment2));

        hotelRepository.save(hotel);

    }
}*/
