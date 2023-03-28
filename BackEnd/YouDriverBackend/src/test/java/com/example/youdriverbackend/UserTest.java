package com.example.youdriverbackend;


import com.example.youdriverbackend.Entity.Utilisateur;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UserTest {

    @Test
    public void testCreateUser() {
        Utilisateur user = new Utilisateur(1L ,"anas" , "jabellah" , "anas jabellah" , "anas@gmail.com" ,"12344","0605167864","casa N123", 1L , 1L);
        assertNotNull(user);
        assertEquals("John", user.getFirstName());
        assertEquals("Doe", user.getLastName());
        assertEquals("john.doe@example.com", user.getEmail());
    }

}
