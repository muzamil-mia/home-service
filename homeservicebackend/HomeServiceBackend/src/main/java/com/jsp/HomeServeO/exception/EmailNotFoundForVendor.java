package com.jsp.HomeServeO.exception;

import lombok.Data;

@Data
public class EmailNotFoundForVendor extends RuntimeException {
	
	private String message = "Email not found please register first or enter correct email";

	public EmailNotFoundForVendor(String message) {
		super();
		this.message = message;
	}

	public EmailNotFoundForVendor() {
		super("Email not found.");
        this.message = "Email not found.";
	}
	
	

}
