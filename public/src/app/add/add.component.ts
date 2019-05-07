import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newPet: any;
  type: any;
  description: any;
  errors = [];
  
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newPet = {name: "", type: "", description: "", notes: "", service: ""}
    // this._httpService.allPets().subscribe(data => console.log(data));
  }

  addPet(){
    this._httpService.createPet(this.newPet).subscribe(data=>{
      console.log(data);
      if(data['errors']){
        for(var key in data ['errors']){
          console.log(data['errors'][key]['message']);
          this.errors.push(data['errors'][key]['message']);
        }
      }else{
        this.newPet = {name: "", type: "", description: "", skillOne: "", skillTwo: "", skillThree: ""}
        this._router.navigate(['/pets']);
      }
    })
  }

}
