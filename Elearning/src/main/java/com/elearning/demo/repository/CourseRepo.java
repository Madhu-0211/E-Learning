package com.elearning.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.elearning.demo.model.CourseModel;

@Repository
public interface CourseRepo extends JpaRepository<CourseModel,Integer>{

}
