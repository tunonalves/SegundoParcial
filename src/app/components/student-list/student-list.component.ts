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
  notfound =  false;
  arrayStudent: Students[] = [];
  arraycareer: Career[] = [];
  idcarrer: number = 0;

  constructor(private servicestudent: StudentsService, private servicecareer: CareerService) { }

  ngOnInit(): void {
  }

  getstudent(){
    this.notfound = false;
    this.servicestudent.getStudent().subscribe((studentFromTheApi: Students) => {
      this.idcarrer = studentFromTheApi.carrerId;
      this.servicecareer.getcareer(this.idcarrer).subscribe((careerfromapi: Career)=>{
        this.arraycareer.push(careerfromapi);
      },(err2: any)=>{console.error(err2);}
      );
      this.arrayStudent.push(studentFromTheApi);
    },(err: any) =>{
      console.error(err);
      this.notfound = true;
    });
  }
}
