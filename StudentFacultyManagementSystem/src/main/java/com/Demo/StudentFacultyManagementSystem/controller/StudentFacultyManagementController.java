package com.Demo.StudentFacultyManagementSystem.controller;

import com.Demo.StudentFacultyManagementSystem.model.StudentFacultyManagement;
import com.Demo.StudentFacultyManagementSystem.service.StudentFacultyManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5173/")
public class StudentFacultyManagementController {
    @Autowired
    StudentFacultyManagementService stdFacManagerService;
    @PostMapping("/register")
    public String recordRegister(@RequestBody() StudentFacultyManagement stdFacManager)
    {
        String message=stdFacManagerService.recordRegister(stdFacManager);
        return message;
    }
    @PostMapping("/login")
    public int loginChecker(@RequestBody()StudentFacultyManagement stdFacManager) {
        int message=stdFacManagerService.loginChecker(stdFacManager.getEmail(),stdFacManager.getPassword());
        return message;
    }

}
