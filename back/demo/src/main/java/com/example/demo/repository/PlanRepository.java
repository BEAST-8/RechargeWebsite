package com.example.demo.repository;


import com.example.demo.entity.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PlanRepository extends JpaRepository<Plan, Long> {
    Optional<Plan> findByPlanName(String planName);
    // You can add other custom queries as needed
}
