import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public cursos = [
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"},
    {nombre: "Catedra II", tipo: "Avanza", descripcion: "Descripcion II"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
