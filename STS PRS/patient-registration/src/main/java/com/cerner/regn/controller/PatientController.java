package com.cerner.regn.controller;

import java.security.Principal;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cerner.regn.model.Admission;
import com.cerner.regn.model.Patient;
import com.cerner.regn.repository.PatientRepository;
import com.cerner.regn.service.AdmissionService;
import com.cerner.regn.service.PatientService;

/**
 * Controller for Add, Update, Delete Search and get the List of Patient's API's
 * @author MS094311
 *
 */
@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/v1")
public class PatientController {
	
	@Autowired
	private PatientService patientService;
	
	@Autowired
	private PatientRepository patientRepo;

	/**
	 *Getting List of Patients
	 * @return
	 */
	@GetMapping("/patients")
	public ResponseEntity<List<Patient>> getPatient(){
		List<Patient> list = patientService.getPatients();
		if(list.size()<=0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(list)) ;
	}

	/**
	 * Add a Patient
	 * @param patient
	 * @return
	 */
	@PostMapping("/patients")
	public ResponseEntity<Patient> addPatientDetails(@RequestBody Patient patient) {
		Patient p=null;
		try {
			p = patientService.addPatient(patient);
			return ResponseEntity.of(Optional.of(p));
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	/**
	 * Update a Patient
	 * @param patient
	 * @return
	 */
	@PutMapping("/patients")
	public ResponseEntity<Patient> updatePatientDetails(@RequestBody Patient patient) {
		Patient p=null;
		try {
			p = patientService.updatePatient(patient);
			return ResponseEntity.ok().body(p);
		}catch(Exception e){
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
	
	/**
	 * Search a Patient
	 * @param query
	 * @return
	 */
	@GetMapping("/search/{query}")
	public ResponseEntity<?> searchPatient(@PathVariable("query") String query) {
		List<Patient> list = this.patientRepo.findByFirstNameContaining(query);
		return ResponseEntity.ok(list) ;
	}
	
	/**
	 * Delete a Patient
	 * @param patientId
	 */
	@DeleteMapping("/patients/{patientId}")
	public void deletePatient(@PathVariable("patientId") long patientId) {
		try {
			patientService.deletePatient(patientId);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
//	}
	
}
