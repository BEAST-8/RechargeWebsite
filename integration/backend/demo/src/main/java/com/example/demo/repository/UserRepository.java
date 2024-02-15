package com.example.demo.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Register;

public interface UserRepository extends JpaRepository<Register, Integer> {
    Optional<Register> findByEmail(String email);
}
