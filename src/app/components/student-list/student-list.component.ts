import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/models/students';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  notfound =  false;
  arrayStudent: Students[] = [];

  constructor(private servicestudent: StudentsService) { }


  ngOnInit(): void {
  }
  getstudent(){
    this.notfound = false;
    this.servicestudent.getStudent().subscribe((studentFromTheApi: Students) => {
      this.arrayStudent.push(studentFromTheApi);
    },(err: any) =>{
      console.error(err);
      this.notfound = true;
    });
  }
}
