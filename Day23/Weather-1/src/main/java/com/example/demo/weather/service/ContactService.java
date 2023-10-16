package com.example.demo.weather.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.weather.dto.request.ContactRequest;
import com.example.demo.weather.dto.response.ContactResponse;
import com.example.demo.weather.entity.Contact;
import com.example.demo.weather.repository.ContactRepository;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class ContactService  {
	  @Autowired
	private final ContactRepository contactRepository;
	
	public boolean addContact(ContactRequest contactRequest) {
		Contact contact=Contact.builder().firstname(contactRequest.getFirstname()).lastname(contactRequest.getLastname()).email(contactRequest.getEmail()).mobileno(contactRequest.getMobileno()).message(contactRequest.getMessage()).build();
		contactRepository.save(contact);
		List<Contact>contactData=contactRepository.findAll();
		if(contactData.size()>0)
		{
			return true;
		}
		else
		{
			return false;
		}
		
	}
	public List<ContactResponse> getContact() 
	{
		List<Contact>contacts=contactRepository.findAll();
		return contacts.stream().map(contact -> mapToContactResponse(contact)).toList();
	}
	
	private ContactResponse mapToContactResponse(Contact contact)
	{
		return ContactResponse.builder().firstname(contact.getFirstname()).lastname(contact.getLastname()).email(contact.getEmail()).mobileno(contact.getMobileno()).message(contact.getMessage()).build();
	}
	
	
	

}