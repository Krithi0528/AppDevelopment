package com.example.demo.weather.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.weather.entity.StoringData;

import com.example.demo.weather.entity.UserRegister;




public interface StoringDataRepo  extends JpaRepository<StoringData,Long>{

	List<StoringData> findByUser(UserRegister user);
	
}