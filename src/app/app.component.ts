import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  //inicio del modo noche
 modonoche(){ this.checkDarkTheme();}
//modo noche
  checkDarkTheme(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
   if(prefersDark.matches){
    document.body.classList.toggle('dark');
   }
  }
  //fin de modo noche 
}
