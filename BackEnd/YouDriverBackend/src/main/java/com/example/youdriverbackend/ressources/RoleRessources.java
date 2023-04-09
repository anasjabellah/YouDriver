package com.example.youdriverbackend.ressources;

import com.example.youdriverbackend.Entity.Role;
import com.example.youdriverbackend.Entity.Vehicule;
import com.example.youdriverbackend.Service.RoleService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(path = "roles")
public class RoleRessources {
    private RoleService roleService ;
    @Autowired
    private RoleRessources(RoleService roleService){
        this.roleService = roleService ;
    }

    @GetMapping(path = "")
    public List<Role>  findAll(){return  roleService.findAllRole();}

    @GetMapping(path ="/role/name/{name}")
    public Role findAllByName(@PathVariable String name) {
        return roleService.findByName(name);
    }

    @GetMapping(path ="/role/{id}")
    @ResponseBody
    public Optional<Role> findById(@PathVariable Long id){ return roleService.findById(id); }

    @PostMapping("/role/save")
    public Role save(@RequestBody Role role){
        return roleService.save(role);
    }


    @PutMapping("/role/update/{id}")
    public Role update(@RequestBody Role role, @PathVariable Long id ){
        return roleService.update(role , id);
    }
}
