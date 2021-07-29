package com.elearning.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.elearning.demo.model.LinkModel;
import com.elearning.demo.model.CourseModel;
import com.elearning.demo.model.DAOUser;
import com.elearning.demo.model.ProfessorModel;

import com.elearning.demo.service.ElearningService;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class ElearningController {
	@Autowired
	private ElearningService elearningservice;
	@RequestMapping("/professorSignup")
	public ResponseEntity<HttpStatus> professorSignup(@RequestBody ProfessorModel promodel)
	{
		elearningservice.professorSignup(promodel);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@RequestMapping("/professorRequest/{id}")
	public ResponseEntity<HttpStatus> update(@RequestBody ProfessorModel promodel,@PathVariable int id){
		elearningservice.professorRequest(promodel,id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@GetMapping("/getId/{id}")
	public Optional<ProfessorModel> getId(@PathVariable int id)
	{
		return elearningservice.getId(id);
	}
	@GetMapping("/getproRequest")
	public List<ProfessorModel> getproRequest()
	{
		return elearningservice.getproRequest();
	}
	@GetMapping("/getStudents")
	public List<DAOUser> getStudents()
	{
		return elearningservice.getStudents();
	}
	@GetMapping("/getByProId/{id}")
	public Optional<ProfessorModel> getByProId(@PathVariable int id)
	{
		return elearningservice.getByProId(id);
	}
	@GetMapping("/getByStuId/{id}")
	public Optional<DAOUser> getByStuId(@PathVariable int id)
	{
		return elearningservice.getByStuId(id);
	}
	@RequestMapping("/updateStudents/{id}")
	public ResponseEntity<HttpStatus> update(@RequestBody DAOUser user,@PathVariable int id){
		elearningservice.update(user,id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping("/deleteStudent/{id}")
	public ResponseEntity<HttpStatus> reject(@PathVariable int id)
	{
		elearningservice.reject(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping("/rejectProfessor/{id}")
	public ResponseEntity<HttpStatus> rejectProfessor(@PathVariable int id)
	{
		elearningservice.rejectpro(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@RequestMapping("/addCourse")
	public ResponseEntity<HttpStatus> add(@RequestBody CourseModel comodel)
	{
		elearningservice.addCourse(comodel);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@GetMapping("/getCourse")
	public List<CourseModel> getCourse()
	{
		return elearningservice.getCourse();
	}
	@RequestMapping("/addLink/{id}")
	public ResponseEntity<HttpStatus> addLink(@RequestBody LinkModel Linkmodel,@PathVariable int id)
	{
		elearningservice.addLink(Linkmodel,id);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@GetMapping("/getLink/{id}")
	public List<LinkModel> getLink(@PathVariable int id)
	{
		return elearningservice.getLink(id);
	}
}
