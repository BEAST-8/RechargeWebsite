package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Login;
import com.example.demo.entity.LoginDto;



public interface LoginService {

	String addUser1(LoginDto user1dto);

	List<Login> getUser1();

	

}