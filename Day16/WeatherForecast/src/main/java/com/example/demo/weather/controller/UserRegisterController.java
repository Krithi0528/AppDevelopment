package com.example.demo.weather.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.weather.entity.UserLoginEntity;
import com.example.demo.weather.entity.UserRegisterEntity;
import com.example.demo.weather.service.UserLoginService;
import com.example.demo.weather.service.UserRegisterService;

@RestController
public class UserRegisterController {

	@Autowired
    private UserRegisterService s;
    @GetMapping("/registergetdata")
    public List<UserRegisterEntity>getData()
  	  {	
  		  return s.getDetails();
  	  }
    @PutMapping("/registerput")
    public String updateDetails(@RequestBody UserRegisterEntity e,@RequestParam int id)
    {
    	e.setId(id);
    	s.updateUser(e);
    	return "Successfully updated";
    }
	
	@PostMapping("/registerpost")
	public String saveDetails(@RequestBody UserRegisterEntity e)
	{
		s.saveData(e);
		return "Successfully saved";
	}
	@DeleteMapping("/registerdelete")
	public String deleteDetails(@RequestParam int id)
	{
		s.deleteData(id);
		return "Successfully deleted";
	}
}