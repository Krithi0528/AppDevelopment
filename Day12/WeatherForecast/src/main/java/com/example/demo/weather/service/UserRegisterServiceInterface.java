package com.example.demo.weather.service;

import java.util.List;

import com.example.demo.weather.entity.UserLoginEntity;
import com.example.demo.weather.entity.UserRegisterEntity;

public interface UserRegisterServiceInterface {

	 public List<UserRegisterEntity>getDetails();
	    public void saveData(UserRegisterEntity e);
	    public void updateUser(UserRegisterEntity e);
	    public void deleteData(int id);

}