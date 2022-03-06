import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  exams : any;
  searchForm!: FormGroup;


  constructor(private service : ExamService, private router : Router) { }

  ngOnInit(): void {
  
    this.searchForm = new FormGroup({
      searchName: new FormControl()
    });
    
    this.service.getExams().subscribe((res:any)=>{
      this.exams = res.data;
    })

  }
  deleteExam(id:any){
    if(confirm("ต้องการลบ?")){
      this.service.deleteExam(id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=>{
          this.router.navigate(['/exam']);
        });
      });
    }
  }
   
  searchName(){
    this.service.getExamByName(this.searchForm.value.searchName).subscribe((res:any)=>{
      this.exams = res.data;
    })
  }
}
