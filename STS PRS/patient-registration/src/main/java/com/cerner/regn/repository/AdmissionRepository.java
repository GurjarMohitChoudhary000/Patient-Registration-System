package com.cerner.regn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cerner.regn.model.Admission;

@Repository
public interface AdmissionRepository extends JpaRepository<Admission,Long> {
	
	@Query(value="Select a.roomno,a.p_id from admission a inner join patients p on (a.p_id=p.id) where (a.p_id=:identity)",nativeQuery=true)
	public Object findByRoomNo(@Param("identity") long identity);

}