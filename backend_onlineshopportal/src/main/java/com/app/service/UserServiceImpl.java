package com.app.service;

import java.time.LocalDateTime;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.UserDao;
import com.app.dto.Signup;
import com.app.pojos.Users;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public Signup userRegistration(Signup reqDTO) {
		
		Users user=mapper.map(reqDTO, Users.class);
		user.setCreatedAt(LocalDateTime.now());		
		return mapper.map(userDao.save(user), Signup.class);
	}
	
	@Override
	public Users findByEmail(String email) {
				 Users u= userDao.findByEmail(email)
				 .orElseThrow(()->new ResourceNotFoundException("User is not present !!"));
		 System.out.println(u);
		 
		return u;
	}


}
