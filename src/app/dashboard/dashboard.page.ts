import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 //modo noche
darkMode: boolean = true;
  constructor() { 
    //modo noche
    const prefersDarks = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = !this.darkMode ;
    //fin modo noche
  }
  
  //modo noche inicio
  cambio(){
    this. darkMode = !this.darkMode ;
    document.body.classList.toggle('dark');
  }

  ngOnInit() {
  }

}
