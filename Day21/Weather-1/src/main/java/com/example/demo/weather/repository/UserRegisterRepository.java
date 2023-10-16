package com.example.demo.weather.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.weather.entity.UserRegister;

public interface UserRegisterRepository extends JpaRepository<UserRegister,Long>{
	Optional<UserRegister>findByUsername(String username);
}