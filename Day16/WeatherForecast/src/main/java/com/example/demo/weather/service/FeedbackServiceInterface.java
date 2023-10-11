package com.example.demo.weather.service;

import java.util.List;

import com.example.demo.weather.entity.FeedbackEntity;
import com.example.demo.weather.entity.UserLoginEntity;

public interface FeedbackServiceInterface {

	public List<FeedbackEntity> getFeedback();
	public void updateFeedback(FeedbackEntity feedbackEntity);
	public void deleteFeedback(int userId);
	public void saveData(FeedbackEntity e);
}