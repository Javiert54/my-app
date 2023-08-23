import { Component, OnInit } from '@angular/core';

import { curso } from '../modelos/cursos';




export let cursos: any[] = [
	new curso("Mates", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", 500),
	new curso("Lengua", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", 550),
	new curso("Ciencias Naturales", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", 480)
];

export default cursos;



@Component({
	selector: 'app-cursos',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.css']
})




export class CursosComponent implements OnInit{


	// public nombreAlumno: String

	// public cursonombre: String
	// public cursodescripcion: String
	public cursos: 	Array<curso>

	// public nombreCurso: String
	// public descripcion: String
	// public duracion: String


    constructor(){

		this.cursos = [
			new curso("Mates", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", 500),
			new curso("Lengua", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", 550),
			new curso("Ciencias Naturales", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", 480)
		]


    }

	ngOnInit(): void {
		
		// console.log(this.cursos.length);

	}



}

