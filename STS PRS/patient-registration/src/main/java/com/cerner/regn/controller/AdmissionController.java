package com.cerner.regn.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cerner.regn.model.Admission;
import com.cerner.regn.model.Patient;
import com.cerner.regn.repository.AdmissionRepository;
import com.cerner.regn.service.AdmissionService;

/**
 * Controller having APIs for alloting a new room to the existing patient
 * @author MS094311
 *
 */
@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/v2")
public class AdmissionController {
	
	@Autowired
	private AdmissionService admissionService;
	
	@Autowired
	private AdmissionRepository admissionRepo;
	
	/**
	 * API to add new Admission
	 * @param admission
	 * @return
	 */
	@PutMapping("/admission")
	public Admission addNew(@RequestBody Admission admission) {
		Admission a = null;
		a = admissionService.addRoom(admission);
		return a;
	}
	
	/**
	 * Get API for getting List of Admission
	 * @return
	 */
	@GetMapping("/admission")
	public ResponseEntity<List<Admission>> getAdmission(){
		List<Admission> list = admissionService.getAdmission();
		if(list.size()<=0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(list)) ;
	}
	
	@GetMapping("/admission/{identity}")
	public Object searchPatient(@PathVariable("identity") long identity) {
		Object adm = admissionRepo.findByRoomNo(identity);
		return adm ;
	}

}
