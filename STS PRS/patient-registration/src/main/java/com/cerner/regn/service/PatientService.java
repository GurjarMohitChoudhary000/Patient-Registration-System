package com.cerner.regn.service;

import java.util.List;

import com.cerner.regn.model.Patient;

/**
 * 
 * @author MS094311
 *
 */
public interface PatientService {
	public List<Patient> getPatients();
	public Patient addPatient(Patient patient);
	public Patient updatePatient(Patient patient);
	public void deletePatient(long patientId);
}
