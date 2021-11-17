export class ActiveStudents {
	
	constructor(StudentID:number,Career:string,FirstName:string,LastName:string,Email:string){
		this.studentId = StudentID;
		this.career = Career;
		this.firstName = FirstName;
		this.lastName = LastName;
		this.email = Email;
	}

	studentId: number = 0;
	career: string = "";
	firstName: string = "";
	lastName: string = "";
	email: string = "";
}