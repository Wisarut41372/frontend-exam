import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  errMessage = "";
  isregisterFailed = false;
  isregister = false;

  constructor(private service: UserService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      name: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      status: new FormControl(),
  });
}
  doRegister() {
    let register = {
      username: this.registerForm.value.username,
      name: this.registerForm.value.name,
      lastname : this.registerForm.value.lastname,
      email : this.registerForm.value.email,
      password  : this.registerForm.value.password,
      status : this.registerForm.value.status,

    // window.alert(login.email + login.password);

    };
    this.service.register(register).subscribe((res)=>{
      this.tokenStorage.saveToken(res.token);
      this.tokenStorage.saveUser(res.userCredentials);
      this.isregister = true;
      window.location.reload();
    },err => {
      this.errMessage = err.error.msg;
      this.isregister = true;
      console.log(this.errMessage);
    });
  }
}
