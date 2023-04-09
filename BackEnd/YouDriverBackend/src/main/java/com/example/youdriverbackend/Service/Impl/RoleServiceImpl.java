package com.example.youdriverbackend.Service.Impl;

import com.example.youdriverbackend.Entity.Role;
import com.example.youdriverbackend.Repository.RoleRepository;
import com.example.youdriverbackend.Service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository ;


    @Override
    public Role save(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public Role update(Role role, Long id) {
        Role role1 = roleRepository.findById(id).orElse(null);
        role1.setNameRole(role.getNameRole());
        return roleRepository.save(role1);
    }

    @Override
    public List<Role> findAllRole() {
        return roleRepository.findAll();
    }

    @Override
    public Role findByName(String name) {
        return roleRepository.findByNameRole(name);
    }

    @Override
    public Optional<Role> findById(Long id) {
        return roleRepository.findById(id);
    }

}
