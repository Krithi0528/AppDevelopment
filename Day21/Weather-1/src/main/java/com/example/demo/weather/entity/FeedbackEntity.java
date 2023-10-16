package com.example.demo.weather.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="feedback1")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int feedbackId;
	private  String weather;
	private  String forecast;
	private String communication;
}