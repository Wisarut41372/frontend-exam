import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students : any;
  searchForm!: FormGroup;
  constructor(private service : StudentService, private router : Router) { }
 

  ngOnInit(): void {
    this.service.getStudents().subscribe((res:any)=>{
      this.students = res.data;
    })
    this.searchForm = new FormGroup({
      searchName: new FormControl()
    });
    
  }
  searchName(){
    this.service.getStudentByName(this.searchForm.value.searchName).subscribe((res:any)=>{
      this.students = res.data;
    })
  }

  deleteStudent(id:any){
    if(confirm("Comfirm Delete")){
      this.service.deleteStudent(id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=>{
          this.router.navigate(['/student']);
        });
      });
    }
  }
}
