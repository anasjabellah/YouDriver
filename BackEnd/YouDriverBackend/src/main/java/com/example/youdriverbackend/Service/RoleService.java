package com.example.youdriverbackend.Service;

import com.example.youdriverbackend.Entity.Role;

import java.util.List;


public interface RoleService {

    public Role  save(Role role);

    public Role update(Role role , Long id);

    public List<Role> findAllRole();

    public Role findByName(String name);
}
