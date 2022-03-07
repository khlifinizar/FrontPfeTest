import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  user:any={"nom":"moatez","username":"moatez","password":"essat","role":[{"id":"1"}]}
  constructor(private gest:GestionService) { }

  ngOnInit(): void {
    this.gest.save(this.user).subscribe({

      next:(data:any)=>{
        console.log(data)},
      error:(err:any)=>{alert("Alert compte introuvable")},
      complete:()=>{}
    })
  
  }
  

}
