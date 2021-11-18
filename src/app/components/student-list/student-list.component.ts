import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveStudents } from 'src/app/models/ActiveStudent';
import { ActiveStudentService } from 'src/app/services/active-student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  StudentActive: Array<ActiveStudents> = [];

  constructor(private activestudent: ActiveStudentService, private RT: Router) { }

  ngOnInit(): void {
    this.StudentActive = this.activestudent.getActiveStudent()
  }

  AddScore(IDStudent: number){
    this.RT.navigate(['/Student-list',IDStudent,'/Score-add']);
  }
}
