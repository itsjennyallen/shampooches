import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  register(user){
    return this._http.post('/register',user);
  }
  login(user){
    return this._http.post('/login',user);
  } 
  getCurrentUser(){
    return this._http.get('/currentUser');
  }

  allPets(){
    return this._http.get('/api/pets');
  }
  createPet(newPet: any){
    return this._http.post('/api/pets', newPet);
  }
  singlePet(id: string){
    return this._http.get(`/api/pets/${id}`)
  }
  delete_pet(id: any) :any{
    return this._http.delete(`/api/pets/${id}`)
  }
  editPet(editPet){
    return this._http.put(`/api/pets/${editPet._id}`, editPet)
  }
  
}

