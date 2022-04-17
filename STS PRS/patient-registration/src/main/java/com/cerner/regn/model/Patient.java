package com.cerner.regn.model;

import java.util.Date;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 
 * @author MS094311
 *
 */
@Entity
@Table(name = "patients")
public class Patient {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO )
	@Column(name = "id")
	private long id;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "yyyy-MM-dd")
    @CreatedDate
	@Column(name = "dob")
	private Date dOB;
	
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "contact_no")
	private long mob;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "email_id")
	private String emailId;
	
	@OneToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="patient")
	@JsonManagedReference
	private Admission admission;

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getdOB() {
		return dOB;
	}

	public void setdOB(Date dOB) {
		this.dOB = dOB;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public long getMob() {
		return mob;
	}

	public void setMob(long mob) {
		this.mob = mob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Admission getAdmission() {
		return admission;
	}

	public void setAdmission(Admission admission) {
		this.admission = admission;
	}

	public Patient(long id, String firstName, String lastName, Date dOB, String gender, long mob, String address,
			String emailId) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dOB = dOB;
		this.gender = gender;
		this.mob = mob;
		this.address = address;
		this.emailId = emailId;
	}

	public Patient() {
		super();
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", dOB=" + dOB
				+ ", gender=" + gender + ", mob=" + mob + ", address=" + address + ", emailId=" + emailId + "]";
	}
	
	
	
}
