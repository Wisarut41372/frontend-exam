import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {
  examForm!: FormGroup;

  constructor(private service: ExamService,private router: Router) { }

  ngOnInit(): void {
    this.examForm = new FormGroup({
      title: new FormControl(),
      subject: new FormControl(),
      chapter: new FormControl(),
      score: new FormControl(),
      passed: new FormControl(),
    });
  }

  addExam(){
    let exam = {
      title:this.examForm.value.title,
      subject: this.examForm.value.subject,
      chapter: this.examForm.value.chapter,
      score: this.examForm.value.score,
      passed: this.examForm.value.passed,
    }
    this.service.addExam(exam).subscribe((res)=>{
      console.log(res);
      if(res.msg="Add a exam complete."){
        window.alert("เพิ่มข้อสอบเรียบร้อย");
        this.router.navigate(["/exam"]);
      }else{
        window.alert("เพิ่มข้อสอบไม่สำเร็จ !");
        this.router.navigate(["/exam/add"]);
      }
      
    });
  }

}