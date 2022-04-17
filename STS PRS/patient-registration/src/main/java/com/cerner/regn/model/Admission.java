package com.cerner.regn.model;

import javax.persistence.CascadeType;

import javax.persistence.JoinColumn;
import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.OneToOne;

@Entity
@Table(name = "admission")
public class Admission {

	@Id
	@Column(name="admId")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long admId;
	
	@Column(name="roomno")
	private long roomNo;
	
	@OneToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="p_id")
	@JsonBackReference
	private Patient patient;

	public Admission() {
		super();
	}

	public Admission(long admId, long roomNo, Patient patient) {
		super();
		this.admId = admId;
		this.roomNo = roomNo;
		this.patient = patient;
	}

	public long getAdmId() {
		return admId;
	}

	public void setAdmId(long admId) {
		this.admId = admId;
	}

	public long getRoomNo() {
		return roomNo;
	}

	public void setRoomNo(long roomNo) {
		this.roomNo = roomNo;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	@Override
	public String toString() {
		return "Admission [admId=" + admId + ", roomNo=" + roomNo + ", patient=" + patient + "]";
	}

}
