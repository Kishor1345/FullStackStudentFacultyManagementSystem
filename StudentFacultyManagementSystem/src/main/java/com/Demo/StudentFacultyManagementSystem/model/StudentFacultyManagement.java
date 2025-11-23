package com.Demo.StudentFacultyManagementSystem.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name="usermaster")
public class StudentFacultyManagement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="userid")
    private int user_Id;
    @Column(name="name")
    private String name;
    @Column(name="email",unique = true)
    private String email;
    @Column(name="password")
    private String password;
    @Column(name="member")
    private Integer member;


    public int getUser_Id() {
        return user_Id;
    }

    public void setUser_Id(int user_Id) {
        this.user_Id = user_Id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getMember() {
        return member;
    }

    public void setMember(Integer member) {
        this.member = member;
    }
}
