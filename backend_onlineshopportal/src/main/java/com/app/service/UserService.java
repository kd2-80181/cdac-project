package com.app.service;

import javax.validation.Valid;

import com.app.dto.SigninRequest;
import com.app.dto.SigninResponse;
import com.app.dto.Signup;
import com.app.pojos.Users;

public interface UserService {

	//sign up
	Signup userRegistration(Signup reqDTO);


}
