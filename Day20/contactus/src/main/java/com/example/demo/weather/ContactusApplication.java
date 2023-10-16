package com.example.demo.weather;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class ContactusApplication {

	public static void main(String[] args) {
		SpringApplication.run(ContactusApplication.class, args);
	
	}
	@Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
		return new RestTemplate();
	}

}
