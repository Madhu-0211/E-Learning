package com.elearning.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.elearning.demo.model.ProfessorModel;

@Repository
public interface ProfessorRepo extends JpaRepository<ProfessorModel,Integer>{
List<ProfessorModel> findByStatus(int s);
}
