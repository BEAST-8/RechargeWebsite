package com.example.demo.config;

import com.example.demo.entity.Plan;
import com.example.demo.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/plans")
public class PlanController {

    private final PlanService planService;

    @Autowired
    public PlanController(PlanService planService) {
        this.planService = planService;
    }

    @GetMapping("/all")
    public List<Plan> getAllPlans() {
        return planService.getAllPlans();
    }

    @GetMapping("/{planId}")
    public Optional<Plan> getPlanById(@PathVariable Long planId) {
        return planService.getPlanById(planId);
    }

    @GetMapping("/byName/{planName}")
    public Optional<Plan> getPlanByName(@PathVariable String planName) {
        return planService.getPlanByName(planName);
    }

    @PostMapping("/create")
    public void createPlan(@RequestBody Plan plan) {
        planService.createPlan(plan);
    }

    @PutMapping("/update/{planId}")
    public void updatePlan(@PathVariable Long planId, @RequestBody Plan updatedPlan) {
        planService.updatePlan(planId, updatedPlan);
    }

    @DeleteMapping("/delete/{planId}")
    public void deletePlan(@PathVariable Long planId) {
        planService.deletePlan(planId);
    }
}
