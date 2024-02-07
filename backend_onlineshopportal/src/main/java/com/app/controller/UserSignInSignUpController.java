package com.app.controller;

import java.net.http.HttpRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.websocket.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SigninRequest;
import com.app.dto.SigninResponse;
import com.app.dto.Signup;
import com.app.pojos.Users;
import com.app.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin 
public class UserSignInSignUpController {
	@Autowired
	private UserService userService;
	

	// sign up
	@PostMapping("/signup")
	public ResponseEntity<?> userSignup(@RequestBody @Valid Signup dto) {
			System.out.println("in sign up " + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.userRegistration(dto));
	}

	//signin
	@PostMapping("/signin")
	public ResponseEntity<?> signinUser(@RequestBody @Valid SigninRequest reqDTO,HttpServletRequest req) {
		System.out.println("in signin " + reqDTO); 
	     SigninResponse respDto = new SigninResponse();
	     
              Users u=	userService.findByEmail(reqDTO.getEmail());
              System.out.println("before if :"+u);
       if(u.getPassword().equals(reqDTO.getPassword())) 
       {
           System.out.println("in if :"+u);

    	   respDto.setFirstName(u.getFirstName());
    	   respDto.setLastName(u.getLastName());
    	   respDto.setRole(u.getRole());
    	   respDto.setEmail(u.getEmail());
    	   respDto.setId(u.getId());
    	   respDto.setMsg("User Verified Succefully");
    	   
    	   
    	   
    	   System.out.println("response dto :"+respDto.toString());
    	  HttpSession session= req.getSession();
    	   session.setAttribute("userId",respDto.getId());
    	   
   		return  ResponseEntity.status(HttpStatus.OK).body(respDto);

       }
       System.out.println("after if :"+u);

       respDto.setMsg("User Not Found !!!1");
		return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(respDto);

	}

	
	@GetMapping("/reset/{email}")
	public ResponseEntity<?> userGetByMail(@PathVariable String email) {
		System.out.println("in sign up " + email);
	return ResponseEntity.status(HttpStatus.CREATED).body(userService.findByEmail(email));
}
	
	
}
