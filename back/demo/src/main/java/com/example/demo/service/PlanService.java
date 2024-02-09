package com.example.demo.service;


import com.example.demo.entity.Plan;
import com.example.demo.repository.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlanService {

    private final PlanRepository planRepository;

    @Autowired
    public PlanService(PlanRepository planRepository) {
        this.planRepository = planRepository;
    }

    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    public Optional<Plan> getPlanById(Long planId) {
        return planRepository.findById(planId);
    }

    public Optional<Plan> getPlanByName(String planName) {
        return planRepository.findByPlanName(planName);
    }

    public void createPlan(Plan plan) {
        planRepository.save(plan);
    }

    public void updatePlan(Long planId, Plan updatedPlan) {
        if (planRepository.existsById(planId)) {
            updatedPlan.setpId(planId);
            planRepository.save(updatedPlan);
        }
    }

    public void deletePlan(Long planId) {
        planRepository.deleteById(planId);
    }
}
