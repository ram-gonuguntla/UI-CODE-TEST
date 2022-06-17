import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../utils/common.interface';
import { UtilService } from '../utils/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userNotFound: boolean = false;
  usersInfo!: UserInfo[];
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private utilService: UtilService, private router: Router) { }

  ngOnInit(): void {
    this.http.get('../../assets/users-response.json').subscribe((users)=> { 
      this.usersInfo = JSON.parse(JSON.stringify(users));
    });
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    })
    
  }

  onSubmit({value}: FormGroup): void{
    const result = this.usersInfo.find((obj) => obj.username.toLowerCase() === value.userName);
    this.userNotFound = result ? false : true;
    if(result) {
      this.utilService.updateLogiedInUser(result);
      this.router.navigateByUrl("/todo");
    }

  }

}
