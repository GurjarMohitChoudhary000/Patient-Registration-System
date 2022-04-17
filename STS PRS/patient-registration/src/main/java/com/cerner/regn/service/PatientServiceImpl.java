package com.cerner.regn.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cerner.regn.model.Patient;
import com.cerner.regn.repository.PatientRepository;

/**
 * 
 * @author MS094311
 *
 */
@Service
public class PatientServiceImpl implements PatientService{
	
	@Autowired
	private PatientRepository patientRepo;
	
	/**
	 * 
	 */
	public PatientServiceImpl() {
		
	}

	/**
	 * Get All Patients
	 */
	@Override
	public List<Patient> getPatients() {
		return patientRepo.findAll();
	}

	/**
	 * Add 1 Patient
	 */
	@Override
	public Patient addPatient(Patient patient) {
		Patient p = null;
		try {
			p = patientRepo.save(patient);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return p;
	}
	
	/**
	 * Update 1 Patient
	 */
	@Override
	public Patient updatePatient(Patient patient) {
		Patient p =null;
		try {
			p = patientRepo.save(patient);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return p;
	}
	
	public void deletePatient(long patientId) {
		try {
			patientRepo.deleteById(patientId);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
}
