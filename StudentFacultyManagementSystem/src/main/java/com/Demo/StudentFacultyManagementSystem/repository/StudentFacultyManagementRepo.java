package com.Demo.StudentFacultyManagementSystem.repository;

import com.Demo.StudentFacultyManagementSystem.model.StudentFacultyManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;


public interface StudentFacultyManagementRepo extends JpaRepository<StudentFacultyManagement,Integer>
{

    Optional<StudentFacultyManagement>findByEmail(String email);
    boolean existsByEmail(String email);

}
