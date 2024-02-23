package com.bipin.FullstackSpringBoot.student;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bipin.FullstackSpringBoot.student.exception.BadRequestException;
import com.bipin.FullstackSpringBoot.student.exception.StudentNotFoundException;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
class StudentService {
    private final StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student addStudent(Student student) {
        Boolean emailExists = studentRepository.selectExistsEmail(student.getEmail());
        if (emailExists) {
            throw new BadRequestException("Email " + student.getEmail() + " is taken");
        }
        return studentRepository.save(student);
    }

    public void deleteStudent(Long studentId) {
        if (!studentRepository.existsById(studentId)) {
            throw new StudentNotFoundException("student with id " + studentId + " does not exist");
        }
        studentRepository.deleteById(studentId);
    }
}
