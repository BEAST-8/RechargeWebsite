package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pId;
    private String planType;
    private String planName;
    private String PlanValidity;
    private int planPrice;
    public Long getpId() {
        return pId;
    }
    public void setpId(Long pId) {
        this.pId = pId;
    }
    public String getPlanType() {
        return planType;
    }
    public void setPlanType(String planType) {
        this.planType = planType;
    }
    public String getPlanName() {
        return planName;
    }
    public void setPlanName(String planName) {
        this.planName = planName;
    }
    public String getPlanValidity() {
        return PlanValidity;
    }
    public void setPlanValidity(String planValidity) {
        PlanValidity = planValidity;
    }
    public int getPlanPrice() {
        return planPrice;
    }
    public void setPlanPrice(int planPrice) {
        this.planPrice = planPrice;
    }
    public Plan(){
         
    }
    public Plan(Long pId, String planType, String planName, String planValidity, int planPrice) {
        this.pId = pId;
        this.planType = planType;
        this.planName = planName;
        PlanValidity = planValidity;
        this.planPrice = planPrice;
    }
    @Override
    public String toString() {
        return "Plan [pId=" + pId + ", planType=" + planType + ", planName=" + planName + ", PlanValidity="
                + PlanValidity + ", planPrice=" + planPrice + "]";
    }
}



