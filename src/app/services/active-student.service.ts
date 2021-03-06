import { NullTemplateVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActiveStudents } from '../models/ActiveStudent';
import { Career } from '../models/careers';
import { Students } from '../models/students';
import { CareerService } from './career.service';
import { StudentsService } from './students.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActiveStudentService {

  studentlist: Array<Students> = [];
  carrerlist: Array<Career> = [];
  activeStudenList: Array<ActiveStudents> = [];


  constructor(private studentservice: StudentsService, private careerservice: CareerService, private RT: Router) { }

  ngOnInit(): void {
  }

  getActiveStudent(){
    this.studentservice.getStudent2()
      .then(reponse => {
        this.studentlist = reponse;
        this.careerservice.getcareer2()
          .then(response2 => {
            this.carrerlist = response2;
              this.studentlist.forEach(student =>{
                this.carrerlist.forEach(career =>{
                  if(student.careerId == career.careerId && career.isActive == true){
                    console.log(student.studentId);
                    let studentactive = new ActiveStudents(student.studentId,career.name,student.firstName,student.lastName,student.email);
                    this.activeStudenList.push(studentactive);
                    //console.log(this.activeStudenList)
                  }
                })
              })
            });
          });
    return this.activeStudenList;
  }

  getStudentbyID(IDStudent: number){
    this.RT.navigate(['/Student-list',IDStudent,'/Score-add']);
  }

}