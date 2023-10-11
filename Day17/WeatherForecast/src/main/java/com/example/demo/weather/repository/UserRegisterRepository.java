package com.example.demo.weather.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.weather.entity.UserRegisterEntity;

@Repository
public interface UserRegisterRepository extends JpaRepository<UserRegisterEntity,Integer>{

}