package com.example.demo.weather.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.weather.entity.FeedbackEntity;

public interface FeedbackRepository extends JpaRepository<FeedbackEntity,Integer>{

}