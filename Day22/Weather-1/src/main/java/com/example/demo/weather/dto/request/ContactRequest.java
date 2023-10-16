package com.example.demo.weather.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContactRequest 
{
    private String firstname;
    private String lastname;
    private String email;
    private String mobileno;
    private String message;
   
}