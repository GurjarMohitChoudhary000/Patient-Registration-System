package com.cerner.regn.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cerner.regn.model.Patient;
import com.cerner.regn.service.*;

/**
 * 
 * @author MS094311
 *
 */
@Repository
public interface PatientRepository extends JpaRepository<Patient,Long> {
//	@Query("select p from Patient p where p.firstName like %?1%" +
//			"OR p.lastName like %?1%")
	
//	@Query(value = "select * from patients p where p.first_name "
//			+ "like %:keyword% or p.last_name like %:keyword%", nativeQuery = true)
//	public List<Patient> findAll(String keyword);
	
	public List<Patient> findByFirstNameContaining(String name);
	
}
