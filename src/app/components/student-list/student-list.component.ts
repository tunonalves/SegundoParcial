import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/models/students';
import { CareerService } from 'src/app/services/career.service';
import { StudentsService } from 'src/app/services/students.service';
import { Career } from 'src/app/models/careers';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentlist: Array<Students> = new Array<Students>();
  careerlist: Array<Career> = new Array<Career>();

  constructor(private servicestudent: StudentsService, private servicecareer: CareerService) { }

  ngOnInit(): void {
    this.getstudent2();
    this.getcareer2();
  }

  getcareer(){
    this.servicecareer.getcareer().subscribe((careerfromapi: Career)=>{
      this.careerlist.push(careerfromapi);
    },(err2: any)=>{
      console.error(err2);
    });
  }

  getcareer2(){
    this.servicecareer.getcareer2()
      .then(Response =>{
        this.careerlist = Response;
    })
    .catch(error => { 
    });
  }

  getstudent(){
    this.servicestudent.getStudent().subscribe((studentFromTheApi: Students) => {
      this.studentlist.push(studentFromTheApi);
    },(err: any) =>{
      console.error(err);
    });
  }

  getstudent2(){
    this.servicestudent.getStudent2()
      .then(Response =>{
        this.studentlist = Response;
        console.log(this.studentlist);
    })
    .catch(error => { 
    });
  }
}
