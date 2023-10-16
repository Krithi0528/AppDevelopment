package com.example.demo.weather.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.weather.entity.FeedbackEntity;
import com.example.demo.weather.repository.FeedbackRepository;

@Service
public class FeedbackService {

	@Autowired
    private FeedbackRepository feedbackrepo;
	public List<FeedbackEntity> getFeedback() 
	{
		return feedbackrepo.findAll();
	}
	public void saveFeedback(FeedbackEntity registerEntity) 
	{
	        feedbackrepo.save(registerEntity);
	}
	public void updateFeedback(FeedbackEntity registerEntity) 
	{
		feedbackrepo.save(registerEntity);	
	}
	public void deleteFeedback(int feedbackId) 
	{
		feedbackrepo.deleteById(feedbackId);
	}
}