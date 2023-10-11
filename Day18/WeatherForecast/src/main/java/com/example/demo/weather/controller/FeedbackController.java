package com.example.demo.weather.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.weather.entity.FeedbackEntity;
import com.example.demo.weather.service.FeedbackService;

@RestController
@CrossOrigin
public class FeedbackController {
	@Autowired
	private FeedbackService s;

	@GetMapping("/getFeedback")
	public List<FeedbackEntity> getFeedbackDetails() {
		return s.getFeedback();
	}

	@PutMapping("/putFeedback")
	public String updateFeedbackDetails(@RequestBody FeedbackEntity feedbackEntity, @RequestParam int userId) {
		feedbackEntity.setUserId(userId);
		s.updateFeedback(feedbackEntity);
		return ("Successfully Updated");
	}

	@PostMapping("/postFeedback")
	public String saveDetails(@RequestBody FeedbackEntity e) {
		s.saveData(e);
		return "Successfully saved";
	}
	@DeleteMapping("/deleteRegister")
	public String deleteFeedbackDetails(@RequestParam int userRegId) {
		s.deleteFeedback(userRegId);
		return "Success";
	}
}