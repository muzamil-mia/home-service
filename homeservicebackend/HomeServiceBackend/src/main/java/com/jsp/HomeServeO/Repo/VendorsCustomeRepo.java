package com.jsp.HomeServeO.Repo;

import com.jsp.HomeServeO.Dto.Vendors;

public interface VendorsCustomeRepo {
	Vendors findByEmail(String email);
}
