import { Component, OnInit } from '@angular/core';
import {cursos}  from '../cursos/cursos.component';

@Component({
	selector: 'app-curso',
	templateUrl: './curso.component.html',
	styleUrls: ['./curso.component.css']
})


export class CursoComponent implements OnInit{

	public posicion: number;
	public indice: number
	public cursos: [];
	constructor(){
		this.posicion = 0;
		this.indice = cursos.length
		this.cursos = [ ]
		console.log(cursos.length);
	
		
	}

	sumar(){
		if (this.posicion < cursos.length -1){
			this.posicion++;
		} else{
			this.posicion = 0;
		}

	}
	restar(){
		if (this.posicion > 0){
			this.posicion--;
		} else{
			this.posicion = cursos.length -1;
		}


	}

	ngOnInit(): void {
		console.log(cursos);
	}


}

