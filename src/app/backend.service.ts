import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  register(data:any)
  {
   return this.http.post("https://sakthivelflames.herokuapp.com/register",data)
  }
  get()
  {
    return this.http.get("https://sakthivelflames.herokuapp.com/get")
  }
  delete(id:any)
  {
    return this.http.delete("https://sakthivelflames.herokuapp.com"+"/"+id)
  }
}
