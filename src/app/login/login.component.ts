import { Component,Input,OnInit } from '@angular/core';
import {UsersService}from '../services/users.service';
import { Router } from '@angular/router';
import {user}from '../models/user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  firstname: string='';
  lastname: string='';
  password: string='';
  submitted = false;
  resulat:String='';
 // users:user[]=[];
@Input()users:user;

  constructor(private httpService: UsersService,private router: Router) {
    this.users={
      id:0,
      firstname:'',
      lastname:'',
      password:''

    }
   }

  ngOnInit(): void {
  
  }
 
  onSubmit(user:user): void {
    console.log(user.firstname);
    console.log(user.password);
    this.httpService.login(user.firstname,user.password).subscribe(data => {
      this.resulat =data[0][0];
   
    });
    alert(`${this.firstname} has successfully signed in!`);
    this.router.navigate(['/products']);

    // alert(this.resulat)
    // if(this.resulat=='true'){
    //   alert(`${this.firstname} has successfully signed in!`);
    // }else{
    //   alert('there is an error');
    // }
  // this.usersService.login(this.firstname,this.password).subscribe(
  //   response => {
  //     console.log(response);
  //     this.submitted = true;
  //     alert(`${this.firstname} has successfully signed in!`);
  //   },
  //   error => {
  //     console.log(error);
  //   });;  
  
  // }
  }
}
