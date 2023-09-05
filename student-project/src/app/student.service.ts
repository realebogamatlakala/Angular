import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Observable , of } from 'rxjs';
import { MessageService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'api/heroes';  // URL to web api

  getStudents(): Observable<Student[]> {
    const students = of(STUDENTS);
    this.messageService.add('StudentService: fetched students');
    return students;
  }


  
  constructor(private http: HttpClient, private messageService: MessageService){}
      private log(message: string) {
        this.messageService.add(`StudentService: ${message}`);
  }
  
  getStudent(stdNr: number): Observable<Student> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const student = STUDENTS.find(h => h.stdNr === stdNr)!;
    this.messageService.add(`StudentService: fetched student no=${stdNr}`);
    return of(student);
  }

  
}
 