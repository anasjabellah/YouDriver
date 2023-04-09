package com.example.youdriverbackend.Service;

import com.example.youdriverbackend.Entity.Role;

import java.util.List;
import java.util.Optional;


public interface RoleService {

    public Role  save(Role role);

    public Role update(Role role , Long id);

    public List<Role> findAllRole();

    public Role findByName(String name);

    public Optional<Role> findById(Long id);
}
