import { Component, OnInit } from '@angular/core';
import { alumnoFicha } from '../modelos/alumnos';
// import { alumnoFicha } from '../modelos/alumno';

@Component({
	selector: 'app-alumno',
	templateUrl: './alumno.component.html',
	styleUrls: ['./alumno.component.css']
})

export class AlumnoComponent implements OnInit {

	public listaAlumnos: Array<alumnoFicha>

	constructor() {
		this.listaAlumnos = [

			new alumnoFicha("Carlos", "Rodríguez Santana", 19, "carlosrodrig@gmail.com", "+34 666 66 65 56", "foto de gatito", true),
			new alumnoFicha("Pepe", "Machado Hernández", 16, "pepeg@gmail.com", "+34 999 99 56 21", "foto de perrito", false),
			new alumnoFicha("Jose", "Fernandez Manzano", 22, "josandez@gmail.com", "+34 444 44 22 10", "foto de pandita", true),
			new alumnoFicha("Marta", "Trujillo Quintana", 20, "martquintan@gmail.com", "+34 555 44 21 01", "foto de koala", false)
	
		]

	}
	ngOnInit(): void {
		
	}

}