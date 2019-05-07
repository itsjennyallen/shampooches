import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import {HttpService } from './../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editPet: any;
  newPet: any;
  errors = [];
  id: any;
  name: "";
  type: "";
  description: "";
  skillOne: "";
  skillTwo: "";
  skillThree: "";

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.id= params['id']
      this.editPet={
        name: ""
      }
      console.log(this.id)

    })
    this.singlePet();
  }
  singlePet(){
    let obs = this._httpService.singlePet(this.id);
    obs.subscribe((data: any) => {
      console.log("YAY", data);
      this.editPet = data;
      console.log(this.editPet);
    })
  }
  updatePet(){
    console.log(this.editPet);
    this._httpService.editPet(this.editPet).subscribe(data =>{
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
