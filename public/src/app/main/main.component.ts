import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allPets: any;
  currUser: object;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    console.log("data");
    
    this._httpService.allPets().subscribe(data =>{
      this.allPets = data;
    });
  
    this.currentUser();
  }
  currentUser(){
    this.currUser = {email: ''};

    let obs = this._httpService.getCurrentUser();
    obs.subscribe((data: any) => {
      if(data.loginStatus == false || data.loginStatus != undefined){
        console.log("COOL!");
        console.log("ALLEN ALLEN");
        console.log(data);
        
        this._router.navigate(['/']);
      }else{
        console.log("in the current user method");
        console.log(data);
        this.currUser = data[0];
        console.log(this.currUser);
      }
    });
  }

}
