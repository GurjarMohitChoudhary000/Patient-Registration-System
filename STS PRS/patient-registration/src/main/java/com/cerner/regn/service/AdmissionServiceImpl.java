package com.cerner.regn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cerner.regn.model.Admission;
import com.cerner.regn.model.Patient;
import com.cerner.regn.repository.AdmissionRepository;

@Service
public class AdmissionServiceImpl implements AdmissionService {

	@Autowired
	private AdmissionRepository admissionRepo;
	
	public AdmissionServiceImpl() {
		
	}
	
	@Override
	public Admission addRoom(Admission admission) {
		Admission adm = null;
		
		Patient patient = admission.getPatient();
		patient.setAdmission(admission);
		
		try {
			adm = admissionRepo.save(admission);
		}catch(Exception e) {
			e.printStackTrace();
		}		
		return adm;
	}

	@Override
	public List<Admission> getAdmission() {
		return admissionRepo.findAll();
	}

}
