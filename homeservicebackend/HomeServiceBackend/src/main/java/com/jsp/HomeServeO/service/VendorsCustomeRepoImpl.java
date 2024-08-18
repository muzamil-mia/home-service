package com.jsp.HomeServeO.service;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.jsp.HomeServeO.Dto.Vendors;
import com.jsp.HomeServeO.Repo.VendorsCustomeRepo;

@Service
public class VendorsCustomeRepoImpl implements VendorsCustomeRepo {
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public Vendors findByEmail(String email) {
		System.out.println(email);
		String jpql = "SELECT v FROM Vendors v WHERE v.email = :email";
        Query query = (Query) entityManager.createQuery(jpql);
        query.setParameter("email", email);
        
        try {
        	return (Vendors) query.getSingleResult();
        }catch(NoResultException e) {
        	e.printStackTrace();
        	return null;
        }catch(Exception e) {
        	e.printStackTrace();
        }
		return null;
	}

}
