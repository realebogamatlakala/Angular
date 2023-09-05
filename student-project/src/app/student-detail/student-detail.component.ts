import { Component , Input} from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
    @Input() student? : Student;

    constructor(private route: ActivatedRoute, private studentService: StudentService, private location: Location){}

    ngOnInit(): void {
      this.getStudent();
    }
    
    getStudent(): void {
      const stdNr = Number(this.route.snapshot.paramMap.get('stdNr'));
      this.studentService.getStudent(stdNr)
        .subscribe(student => this.student = student);
    }
    goBack(): void {
      this.location.back();
    }
  }
