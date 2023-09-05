import { Component , OnInit} from '@angular/core';
import { StudentService } from '../student.service';
import { NgModel } from '@angular/forms';
import { STUDENTS } from '../mock-students';
import { Student } from '../student';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

    students: Student[] = []; 
    selectedStudent?: Student;
    

  onSelect(student: Student): void {
    this.selectedStudent = student;
    this.messageService.add(`StudentsComponent: Selected student id = ${student.stdNr}`);
    
}
  constructor(private studentService : StudentService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }
}