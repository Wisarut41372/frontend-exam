import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(private service: StudentService,private router: Router) { }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      username: new FormControl(),
      name: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      status: new FormControl(),
    });
  }

  addStudent(){
    let student = {
      username:this.studentForm.value.username,
      name: this.studentForm.value.name,
      lastname: this.studentForm.value.lastname,
      email: this.studentForm.value.email,
      password: this.studentForm.value.password,
      status: this.studentForm.value.status,
    }
    this.service.addStudent(student).subscribe((res)=>{
      console.log(res);
      if(res.msg="Add a exam complete."){
        window.alert("เพิ่มข้อสอบเรียบร้อย");
        this.router.navigate(["/student"]);
      }else{
        window.alert("เพิ่มข้อสอบไม่สำเร็จ !");
        this.router.navigate(["/student/add"]);
      }
      
    });
  }

}
