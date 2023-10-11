package com.example.demo.weather.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.weather.entity.FeedbackEntity;
import com.example.demo.weather.repository.FeedbackRepository;
@Service
public class FeedbackService implements FeedbackServiceInterface {

	@Autowired
	private FeedbackRepository r ; 
	public List<FeedbackEntity> getFeedback() 
	{
		return r.findAll();
	}

	public void updateFeedback(FeedbackEntity feedbackEntity) 
	{
		r.save(feedbackEntity);	
	}

	public void deleteFeedback(int userId) 
	{
		
		r.deleteById(userId);
	}
	public void saveData(FeedbackEntity e)
	{
		r.save(e);
	}
}