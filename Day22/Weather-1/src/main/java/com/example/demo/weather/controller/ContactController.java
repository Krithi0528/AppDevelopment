package com.example.demo.weather.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.weather.dto.request.ContactRequest;
import com.example.demo.weather.dto.response.ContactResponse;
import com.example.demo.weather.service.ContactService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@CrossOrigin
public class ContactController 
{
	@Autowired
    private ContactService contactService;
    
    @PostMapping("/addContact")
    public ResponseEntity<String> addContact(@RequestBody ContactRequest contactRequest)
    {
    	boolean contactExists=contactService.addContact(contactRequest);
        if(contactExists)
        {
        	return ResponseEntity.status(HttpStatus.CREATED).body("Successfully Done");
        }
        else
        {
        	return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Something went wrong!");
        }
    }
    
	@GetMapping("/getContact")
    public ResponseEntity<List<ContactResponse>>getContact()
    {
    	return ResponseEntity.status(HttpStatus.OK).body(contactService.getContact());
    }
    
}