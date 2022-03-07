import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }
  login(form:any){
    return this.http.post('http://localhost:8080/auth/login',form);
  }
  save(form:any){
    return this.http.post('http://localhost:8080/auth/save',form);
  }
  getall(){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    console.log(localStorage.getItem("token"))
    return this.http.get('http://localhost:8080/rest/all',{headers:hs});
  }
}
