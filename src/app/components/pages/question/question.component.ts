import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions : any;
  searchForm!: FormGroup;


  constructor(private service : QuestionService, private router : Router) { }

  ngOnInit(): void {
  
   
    
    this.service.getQuestion().subscribe((res:any)=>{
      this.questions
    })
  }
}
  

