package com.jsp.HomeServeO.exception;

import lombok.Data;

@Data
public class PasswordIncorrectForVendor extends RuntimeException {

	private String message = "Wrong password please enter correct one.";

	public PasswordIncorrectForVendor(String message) {
		super();
		this.message = message;
	}

	public PasswordIncorrectForVendor() {
		 super("Wrong password, please enter the correct one.");
	        this.message = "Wrong password, please enter the correct one.";
	}


}
