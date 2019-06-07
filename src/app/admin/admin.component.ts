import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public cursos = [
    {nombre: "Catedra I", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra III", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra I", tipo: "Facultad de empresas", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Facultad de empresas", descripcion: "Descripcion II"},
    {nombre: "Catedra III", tipo: "Facultad de empresas", descripcion: "Descripcion II"},
    {nombre: "Catedra I", tipo: "Facultad de negocios", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Facultad de negocios", descripcion: "Descripcion II"},
    {nombre: "Catedra III", tipo: "Facultad de negocios", descripcion: "Descripcion II"},
    {nombre: "Catedra I", tipo: "Habilidades comerciales", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Habilidades comerciales", descripcion: "Descripcion II"},
    {nombre: "Catedra III", tipo: "Habilidades comerciales", descripcion: "Descripcion II"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
