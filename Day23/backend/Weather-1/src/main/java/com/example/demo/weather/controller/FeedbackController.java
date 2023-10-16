package com.example.demo.weather.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.weather.entity.FeedbackEntity;
import com.example.demo.weather.service.FeedbackService;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class FeedbackController {
	@Autowired
	   private FeedbackService feedbackservice;
	   
	   
	   @GetMapping("/getfeedback")
	   public List<FeedbackEntity> getFeedbackDetails()
	   {
	  	 return feedbackservice.getFeedback();
	   }
	   
	   @PostMapping("/postfeedback")
	   public String saveFeedbackDetails(@RequestBody FeedbackEntity registerEntity)
	   {
	     feedbackservice.saveFeedback(registerEntity);
	  	  return ("Successfully saved");
	   }
	   
	   @PutMapping("/putfeedback")
	   public String updateFeedbackDetails(@RequestBody FeedbackEntity registerEntity,@RequestParam int feedbackId)
	   {
	   	registerEntity.setFeedbackId(feedbackId);
	  	    feedbackservice.updateFeedback(registerEntity);
	  	    return ("Successfully Updated");
	   }
	   @DeleteMapping("/deletefeedback")
	   public String deleteFeedbackDetails(@RequestParam int feedbackId)
	   {
	
		   feedbackservice.deleteFeedback(feedbackId);
		   return "Successfully Deleted";
	   }
}
