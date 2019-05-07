import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pet: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(data => {
      console.log(data['id']);
      this._httpService.singlePet(data['id']).subscribe(single =>{
        this.pet = single;
      })

    })
  }
  delete(id){
    console.log(id);
    let obs = this._httpService.delete_pet(id);
    obs.subscribe(data => {
      this._router.navigate(['/pets']);
    })
  }

}
