package com.elearning.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.elearning.demo.repository.CourseRepo;
import com.elearning.demo.repository.LinkRepo;
import com.elearning.demo.repository.ProfessorRepo;
import com.elearning.demo.repository.UserRepo;
import com.elearning.demo.model.DAOUser;
import com.elearning.demo.model.ProfessorModel;
import com.elearning.demo.model.CourseModel;
import com.elearning.demo.model.LinkModel;
@Service
public class ElearningService {
@Autowired
private UserRepo userrepo;
@Autowired
private LinkRepo lrepo;
@Autowired
private CourseRepo corepo;
@Autowired
private ProfessorRepo prorepo;
@Autowired
private PasswordEncoder bcryptEncoder;

@Transactional
public void professorSignup(ProfessorModel promodel) {
	prorepo.save(promodel);
	}
@Transactional
public void professorRequest(ProfessorModel promodel,int id)
{
	promodel.setId(id);
	prorepo.save(promodel);
	DAOUser daouser = new DAOUser();
	daouser.setId(promodel.getId());
	daouser.setUsername(promodel.getUsername());
	daouser.setPassword(bcryptEncoder.encode(promodel.getPassword()));
	daouser.setEmail(promodel.getEmail());
	daouser.setPhonenumber(promodel.getPhonenumber());
	daouser.setRole("ROLE_PROFESSOR");
	userrepo.save(daouser);
}
@Transactional
public void update(DAOUser user,int id)
{
	user.setId(id);
	userrepo.save(user);
}
@Transactional
public List<ProfessorModel> getproRequest(){
	return prorepo.findAll();
}
@Transactional
public Optional<ProfessorModel> getId(int id){
	return prorepo.findById(id);
}
@Transactional
public Optional<ProfessorModel> getByProId(int id){
	return prorepo.findById(id);
}
@Transactional
public Optional<DAOUser> getByStuId(int id){
	return userrepo.findById(id);
}


@Transactional
public List<DAOUser> getStudents(){
	return userrepo.findByRole("ROLE_STUDENT");
}
@Transactional
public void reject(int id)
{
	DAOUser user1=userrepo.getOne(id);
	userrepo.delete(user1);
}
@Transactional
public void rejectpro(int id)
{
	ProfessorModel pro=prorepo.getOne(id);
	prorepo.delete(pro);
}
@Transactional
public List<CourseModel> getCourse(){
	return corepo.findAll();
}
@Transactional
public void addCourse(CourseModel comodel) {
	corepo.save(comodel);
	}
@Transactional
public List<LinkModel> getLink(int id){
	return lrepo.findById(id);
}
@Transactional
public void addLink(LinkModel Linkmodel,int id) {
	Linkmodel.setId(id);
	lrepo.save(Linkmodel);
	}

}
