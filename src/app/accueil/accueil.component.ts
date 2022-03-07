import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
    
  constructor(private route:Router) { }
verif:boolean=true;
  ngOnInit(): void {
    
    if(localStorage.length<1){
    //  window.location.replace('login')
    }else{
      this.verif = false;
    }
   
    
  }
deconnecter(){
  localStorage.clear();
  window.location.replace('login')
}

}
