import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public cursos = [
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"},
    {nombre: "Catedra I", tipo: "Facultad de Talento Humano", descripcion: "Descripcion I"}
  ];

  constructor() { }

  ngOnInit() {
  }


}
