package com.example.youdriverbackend.Service.Impl;

import com.example.youdriverbackend.Entity.Role;
import com.example.youdriverbackend.Repository.RoleRepository;
import com.example.youdriverbackend.Service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        return null;
    }

    @Override
    public List<Role> findAllRole() {
        return roleRepository.findAll();
    }

    @Override
    public Role findByName(String name) {
        return roleRepository.findByNameRole(name);
    }

}
