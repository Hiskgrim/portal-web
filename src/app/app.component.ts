import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal-web';
  showLogin = true;

  public funcShowlogin(event){
    this.showLogin = event;
  }

  
}
