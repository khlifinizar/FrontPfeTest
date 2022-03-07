import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:any={};
  constructor(private gest:GestionService) { }

  ngOnInit(): void {
  }
  login( ){
    this.gest.login(this.form).subscribe({

      next:(data:any)=>{
        localStorage.setItem("token",data.token)
        console.log(data)},
      error:(err:any)=>{alert("Alert compte introuvable")},
      complete:()=>{}
    })
  }
  getall(){
    this.gest.getall().subscribe({

      next:(data:any)=>{
        console.log(data)},
      error:(err:any)=>{alert("Alert compte introuvable")},
      complete:()=>{}
    })
  }

}
