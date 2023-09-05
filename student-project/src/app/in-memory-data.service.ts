import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [

        {stdNr: 213112232, fname: 'Thato', lname: 'Daniel', course: 'Electrical', faculty: 'Engineering'},
        {stdNr: 786435676, fname: 'Realeboga', lname: 'Matlakala', course: 'Civil', faculty: 'Engineering'},
        {stdNr: 221343445, fname: 'Mad', lname: 'Max', course: 'IT', faculty: 'Engineering'},
        {stdNr: 767333676, fname: 'Paul', lname: 'Smith', course: 'Fashion', faculty: 'Design'},
        {stdNr: 990939323, fname: 'Thato', lname: 'Daniel', course: 'Electrical', faculty: 'Engineering'},
        {stdNr: 672532663, fname: 'Elon', lname: 'Musk', course: 'Astronomy', faculty: 'Sciences'}
    ];
    return {students};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.stdNr)) + 1 : 11;
  }
}