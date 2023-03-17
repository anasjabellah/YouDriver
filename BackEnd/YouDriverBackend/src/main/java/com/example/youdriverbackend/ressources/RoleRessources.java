package com.example.youdriverbackend.ressources;

import com.example.youdriverbackend.Entity.Role;
import com.example.youdriverbackend.Entity.Utilisateur;
import com.example.youdriverbackend.Service.RoleService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/Roles")
public class RoleRessources {

    private RoleService roleService ;

    @Autowired
    private RoleRessources(RoleService roleService){
        this.roleService = roleService ;
    }

    @GetMapping(path = "")
    public List<Role>  findAll(){return  roleService.findAllRole();}

    @GetMapping("/role/{name}")
    public Role findAllByName(@PathVariable String name) {
        return roleService.findByName(name);
    }
}
