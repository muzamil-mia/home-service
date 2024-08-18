package com.jsp.HomeServeO.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.HomeServeO.Dto.Vendor;
import com.jsp.HomeServeO.Dto.Vendors;
import com.jsp.HomeServeO.service.VendorsService;
import com.jsp.HomeServeO.util.ResponseStructure;

@RestController
@CrossOrigin(origins = "*",methods =  {RequestMethod.POST,RequestMethod.GET,RequestMethod.DELETE,RequestMethod.PUT})
//@CrossOrigin(origins = "http://localhost:5173")
public class VendorsController {
	private static final Logger logger = LoggerFactory.getLogger(VendorsController.class);
	
	@Autowired
	private VendorsService service;
	
	@PostMapping("register/vendor")
	public ResponseEntity<ResponseStructure<Vendors>> registerVendor(@RequestBody Vendors vendor) {
		return service.registerVendor(vendor);
	}
	
	@PostMapping("/vendors")
	public ResponseEntity<ResponseStructure<Vendors>> saveVendor(@RequestBody Vendors vendors) {
		
		return service.saveVendors(vendors);
	}
	/*-------------------------------------------------------------------------------------------------------*/

	@PostMapping("/vendors/login")
	public ResponseEntity<ResponseStructure<Vendors>> login(@RequestBody Vendors vendor) {
        ResponseStructure<Vendors> structure = service.login(vendor);
        return new ResponseEntity<>(structure, HttpStatus.valueOf(structure.getStatus()));
    }
	/*-------------------------------------------------------------------------------------------------------*/

	
	@PutMapping("/vendors")
	public ResponseEntity<ResponseStructure<Vendors>> updateVendors(@RequestBody Vendors vendors){
		return service.updateVendors(vendors);
	}
	/*-------------------------------------------------------------------------------------------------------*/

	
	@PostMapping("/vendorsById")
	public ResponseEntity<ResponseStructure<Vendors>> getVendorById(@RequestParam int id){
		return service.getVendorById(id);
		
	}
	/*-------------------------------------------------------------------------------------------------------*/
	
	@GetMapping("/vendors")  //use customer id as the argument for checking if the customer is their first and handle the exception
	public ResponseEntity<ResponseStructure<List<Vendors>>> getAllVendors(@RequestParam int id){
		return service.getAllVendors(id);
	}
	/*-------------------------------------------------------------------------------------------------------*/

	
	@DeleteMapping("/vendors")
	public ResponseEntity<ResponseStructure<Vendors>> deletVendores(@RequestParam int id){
		return service.deleteVendors(id);
	}
	/*-------------------------------------------------------------------------------------------------------*/

	
	
	

}
