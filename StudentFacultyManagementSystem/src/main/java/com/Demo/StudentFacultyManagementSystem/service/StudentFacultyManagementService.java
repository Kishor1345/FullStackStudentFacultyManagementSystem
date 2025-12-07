package com.Demo.StudentFacultyManagementSystem.service;

import com.Demo.StudentFacultyManagementSystem.model.StudentFacultyManagement;
import com.Demo.StudentFacultyManagementSystem.repository.StudentFacultyManagementRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentFacultyManagementService {
    @Autowired
    StudentFacultyManagementRepo stdFacManagerRepo;

    public String register(StudentFacultyManagement stdFacManager) {

        if (stdFacManagerRepo.existsByEmail(stdFacManager.getEmail())) {
            return "EMAIL_ALREADY_EXISTS";
        }

        stdFacManagerRepo.save(stdFacManager);
        return "REGISTERED_SUCCESSFULLY";
    }

    public int loginChecker(String email, String password) {
        Optional<StudentFacultyManagement> optional = stdFacManagerRepo.findByEmail(email);
        if (optional.isPresent()) {
            StudentFacultyManagement stdFacManager1 = optional.get();
            String bdEmail = stdFacManager1.getEmail();
            String bdPassword = stdFacManager1.getPassword();

            if (email.equalsIgnoreCase(bdEmail) && password.equals(bdPassword)) {
                return 1;
            }
            return 2;
        }
        return 3;
    }

    public String recordRegister(StudentFacultyManagement stdFacManager) {
        if (stdFacManagerRepo.existsByEmail(stdFacManager.getEmail())) {
            return "Email_Already_Exist";
        }
        stdFacManagerRepo.save(stdFacManager);
        return "Register Successfully";
    }
}
