import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:string = "";
  public contrasena:string= "";
  @Output() loginEmiter= new EventEmitter();

  constructor(private router:Router) {

   }

  ngOnInit() {
  }

  funcLogin(){
    if(this.usuario=="") {
      alert("usuario vacio")
    }
    else
    if(this.contrasena=="") {
      alert("contraseña vacia")
    }else    
    if(this.usuario=="admin" && this.contrasena=="123"){
      this.loginEmiter.emit(false);
      this.router.navigate(["admin"]);
    }else    
    if(this.usuario=="pepito" && this.contrasena=="456"){
      this.loginEmiter.emit(false);
      this.router.navigate(["student"]);
    }else{
      alert("Credenciales invalidas")
    }


  }

}
