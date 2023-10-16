package com.example.demo.weather.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.demo.weather.entity.Contactus;

import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/contactus")
public class ContactusController 
{
	@Autowired
    private WebClient.Builder webClientBuilder;

    @GetMapping("/getall")
    public Flux<Contactus> getAllContact() {
        return webClientBuilder.baseUrl("http://localhost:8080").build()
                .get()
                .uri("auth/getContact")
                .retrieve()
                .bodyToFlux(Contactus.class);
    }
}
