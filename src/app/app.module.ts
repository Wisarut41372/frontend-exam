import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { MainComponent } from './components/pages/main/main.component';
import { LoginComponent } from './components/pages/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helper/auth.interceptor';
import { ExamComponent } from './components/pages/exam/exam.component';
import { EditExamComponent } from './components/pages/edit-exam/edit-exam.component';
import { AddExamComponent } from './components/pages/add-exam/add-exam.component';
import { StudentComponent } from './components/pages/student/student.component';
import { AddStudentComponent } from './components/pages/add-student/add-student.component';
import { EditStudentComponent } from './components/pages/edit-student/edit-student.component';
import { AddQuestionComponent } from './components/pages/add-question/add-question.component';

import { RegisterComponent } from './components/pages/register/register.component';
import { QuestionComponent } from './components/pages/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    LoginComponent,
    ExamComponent,
    EditExamComponent,
    AddExamComponent,
    StudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    AddQuestionComponent,
    RegisterComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
