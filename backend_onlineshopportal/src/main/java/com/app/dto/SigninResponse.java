package com.app.dto;


import com.app.enums.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SigninResponse {
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String msg;
	private UserRole role;
}
