import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExamComponent } from './components/pages/add-exam/add-exam.component';
import { AddQuestionComponent } from './components/pages/add-question/add-question.component';
import { AddStudentComponent } from './components/pages/add-student/add-student.component';
import { EditExamComponent } from './components/pages/edit-exam/edit-exam.component';
import { EditStudentComponent } from './components/pages/edit-student/edit-student.component';
import { ExamComponent } from './components/pages/exam/exam.component';

import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { QuestionComponent } from './components/pages/question/question.component';

import { RegisterComponent } from './components/pages/register/register.component';
import { StudentComponent } from './components/pages/student/student.component';

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: "", component: MainComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent, },
  { path: "exam", component: ExamComponent,canActivate : [AuthGuard] },
  { path: "question", component: QuestionComponent,canActivate : [AuthGuard] },
  { path: "exam/add", component: AddExamComponent,canActivate : [AuthGuard] },
  { path: "exam/edit/:id", component: EditExamComponent,canActivate : [AuthGuard] }, // :id
  { path: "student", component: StudentComponent,canActivate : [AuthGuard] },
  { path: "student/add", component: AddStudentComponent,canActivate : [AuthGuard] },
  { path: "student/edit/:id", component: EditStudentComponent,canActivate : [AuthGuard] }, // :id
  { path: "question/add", component: AddQuestionComponent,canActivate : [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
