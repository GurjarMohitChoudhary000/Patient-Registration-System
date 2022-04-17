package com.cerner.regn.service;

import java.util.List;

import com.cerner.regn.model.Admission;

public interface AdmissionService {
	public Admission addRoom(Admission admission);
	public List<Admission> getAdmission();
//	public Admission findRoomByIdentity(long identity);
}
