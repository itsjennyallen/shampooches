import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  newUser: any;
  loginUser: object;
  errors = [];
  id: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newUser = {firstName: '', lastName: '', email: '', password: '', passwordConfirmation: ''};
    this.loginUser = {email: '', password: ''};
  }

  register(){
    if(this.newUser.password != this.newUser.passwordConfirmation) {
      this.errors.push("Passwords do not match");
    }

    this._httpService.register(this.newUser).subscribe(data=>{
      if(data['errors']){
        for(var key in data ['errors']){
          console.log(data['errors'][key]['message']);
          this.errors.push(data['errors'][key]['message']);
        }
      }else{
        this.newUser = {firstName: "", lastName: "", email: "", password: "", passwordConfirmation: ""};
        this._router.navigate(['/pets']);
      }
    })
   
    
  }
  login(){
    let obs = this._httpService.login(this.loginUser);
    obs.subscribe((data: any) => {
      if(data.loginStatus){
        this._router.navigate(['/pets'])
      }else{
        this.errors.push(data.message);
      }
      console.log(data);
    });
  }
  }



