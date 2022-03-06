import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-edit-exam',
  templateUrl: './edit-exam.component.html',
  styleUrls: ['./edit-exam.component.css']
})
export class EditExamComponent implements OnInit {
  id: any;
  examForm!: FormGroup;
  currentExam: any;

  constructor(private service: ExamService,private router: Router,private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.examForm = new FormGroup({
      title: new FormControl(),
      subject: new FormControl(),
      chapter: new FormControl(),
      score: new FormControl(),
      passed: new FormControl()
     
    });

    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['id'];
    });

    this.service.getExamById(this.id).subscribe((res)=>{
      this.currentExam = res.data;
      this.examForm.controls['title'].setValue(this.currentExam.title);
      this.examForm.controls['subject'].setValue(this.currentExam.subject);
      this.examForm.controls['chapter'].setValue(this.currentExam.chapter);
      this.examForm.controls['score'].setValue(this.currentExam.score);
      this.examForm.controls['passed'].setValue(this.currentExam.passed);
    
    });

  }

  updateExam(){
    let product = {
      title: this.examForm.value.title,
      subject: this.examForm.value.subject,
      chapter: this.examForm.value.chapter,
      score: this.examForm.value.score,
      passed: this.examForm.value.passed,

    }
    this.service.updateExam(product,this.id).subscribe((res:any)=>{
      window.alert("แก้ไขเรียบร้อย");
      this.router.navigate(["/exam"]);
    });
  }
}