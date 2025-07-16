package com.example.sasikala.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sasikala.Enitiy.User;
import com.example.sasikala.dto.UserRepository;

@Service
public class UserService {

	 @Autowired
	    private UserRepository userRepository;

	    public boolean login(String email, String password) {
	        User user = userRepository.findByEmail(email);
	        return user != null && user.getPassword().equals(password);
	    }

	    public void register(User user) {
	        userRepository.save(user);
	    }
	
}
