import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  id: any;
  studentForm!: FormGroup;
  currentStudent: any;
  constructor(private service: StudentService,private router: Router,private activatedRouter: ActivatedRoute) { }
  ngOnInit(): void {
    this.studentForm = new FormGroup({
      username: new FormControl(),
      name: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      status: new FormControl(),
     
    });

    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['_id'];
    });

    this.service.getStudentById(this.id).subscribe((res)=>{
      this.currentStudent = res.data;
      this.studentForm.controls['username'].setValue(this.currentStudent.username);
      this.studentForm.controls['name'].setValue(this.currentStudent.name);
      this.studentForm.controls['lastname'].setValue(this.currentStudent.lastname);
      this.studentForm.controls['email'].setValue(this.currentStudent.email);
      this.studentForm.controls['password'].setValue(this.currentStudent.password);
      this.studentForm.controls['status'].setValue(this.currentStudent.status);
    });

  }

  updateStudent(){
    let product = {
      username:this.studentForm.value.username,
      name: this.studentForm.value.name,
      lastname: this.studentForm.value.lastname,
      email: this.studentForm.value.email,
      password: this.studentForm.value.password,
      status: this.studentForm.value.status,

    }
    this.service.updateStudent(product,this.id).subscribe((res:any)=>{
      window.alert("แก้ไขเรียบร้อย");
      this.router.navigate(["/student"]);
    });
  }
}
