package com.example.demo.weather.service;


import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.weather.dto.request.AuthenticationRequest;
import com.example.demo.weather.dto.request.RegisterRequest;
import com.example.demo.weather.dto.response.AuthenticationResponse;
import com.example.demo.weather.entity.UserRegister;
import com.example.demo.weather.entity.enumerate.Role;
import com.example.demo.weather.repository.UserRegisterRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final UserRegisterRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice;
	 private final AuthenticationManager authenticationManager;
	public AuthenticationResponse register(RegisterRequest request) {
		// TODO Auto-generated method stub
	
			
	    var user = UserRegister.builder()
	            .username(request.getUsername())
	            .emailid(request.getEmailid())
	            .mobileno(request.getMobileno())
	            .password(passwordEncoder.encode(request.getPassword()))
	            .role(Role.USER)
	            .build();
	    repository.save(user); 
	    var jwtToken = jwtservice.generateToken(user);
	    
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
				request.getUsername(),
				request.getPassword()
				)
				);
				var user = repository.findByUsername(request.getUsername())
						.orElseThrow();
				 var jwtToken = jwtservice.generateToken(user);
				    
					return AuthenticationResponse.builder()
							.token(jwtToken)
							.build();
	}
	public List<UserRegister> getRegister() 
	{
		return repository.findAll();
	}

	public void updateRegister(UserRegister registerEntity) 
	{
		repository.save(registerEntity);	
	}

	public void deleteRegister(long userRegId) 
	{
		
		repository.deleteById(userRegId);
	}
	
	
	

}