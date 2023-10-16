package com.example.demo.weather.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.weather.entity.Login;
@Repository
public interface LoginRepository extends JpaRepository<Login,Integer>{

}