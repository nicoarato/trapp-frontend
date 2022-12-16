/* eslint-disable @typescript-eslint/naming-convention */
import showToast from 'src/app/helpers/toast';
import showLoading from 'src/app/helpers/loading';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

import { ProjectService } from 'src/app/services/projects/project.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { TreesService } from 'src/app/services/trees/trees.service';

import { transformProjects } from './../../../../services/projects/transform';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  @ViewChild('mySlider', { static: true }) slides: IonSlides;

  form: FormGroup;

  slideOpts = {
    initialSlide: 0,
    speed: 500,
    allowSlidePrev: true,
    allowSlideNext: true
  };

  sintomas = [
    { id: 'SIN_SINTOMAS', value: 'Sin síntomas' },
    { id: 'CON_SINTOMAS', value: 'Con síntomas' }
  ];

  proyectos: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storageService: StorageService,
    private arbolesService: TreesService,
    private projectService: ProjectService
  ) { }

  newDate() {
    const date = new Date().toISOString();
    return date;
  }

  async ngOnInit() {
    this.form = this.fb.group({
      nombre: ['',Validators.required],
      proyecto: ['', Validators.required],
      direccion: ['', [Validators.required, Validators.minLength(6)]],
      barrio: ['', [Validators.required, Validators.minLength(3)]],
      manzana: ['', [Validators.required]],
      faltante: [false],
      muerto: [false],
      createdAt: [this.newDate()],
      latitud: [''],
      longitud: [''],
      especie: [''],
      perimetro: [''],
      altura: [''],
      inclinacion: [''],
      forma: [''],
      valorDeArbol: [''],
      enfermedades: [''],
      plagas: [''],
      // factores de carga
      exposicionAlVientoDominante: [false],
      vigor: [''],
      densidadDeCopa: [''],
      // condiciones de sitio
      espacioDeCrecimiento: [''],
      platoRadicularORaicesExpuestas: [false],
      // blanco bajo el arbol
      usoBajoElArbol: [false],
      tasaDeUso: [''],
      movilidadDeBlanco: [false],
      restriccionDeUso: [false],
      // defectos en las raices
      defectosEnRaices: [false],
      raicesCuerposFructiferos: [false],
      raicesDanoMecanico: [false],
      raicesEstrangulantes: [false],


      agallasTermiterosHormigueros: [''],
      troncoCancros: [''],
      lxCancroTronco: [''],
      troncoCavidades: [''],
      tEspesorDeParedTronco: [''],
      cortezaPerdidaMuerta: [''],
      exudacionDeSavia: [''],
      coeficienteDeEsbeltez: [''],
      conCortezaIncluida: [''],
      conDefectosAdicionales: [''],

      troncoOrificios: [''],
      troncoFustesMultiples: [''],
      troncoHeridas: [''],
      troncoHorquetas: [false],
      troncoInclinacion: [''],
      troncoPudricionDeMadera: [''],
      troncoRajaduras: [''],

      ramasHorquetas: [''],
      ramasHorquetaConCorteza: [''],
      ramasHorquetaConDefectos: [''],
      ramasCancros: [''],
      ramasCavidades: [''],
      ramasCuerposFructiferosEnHongos: [''],
      ramasColgantesQuebrantes: [''],
      ramasMuertas: [false],
      ramasRajaduras: [''],
      ramasPudricionDeMadera: [''],
      ramasInterferenciaElectrica: [''],
      ramasSobreextendidas: [''],


    });
    this.projectService.getAllProjects().subscribe((proyectos: any) => {
      this.proyectos = transformProjects(proyectos);
    });
  }

  getValue(key,{target: { value }} ) {
    this.form.get(key).setValue(value);
  }

  reset() {
    console.log(this.form.value);
    this.saveData();
  }

  async saveData() {
    const arbolito = this.form.value;
    (await this.arbolesService.addNewTree(arbolito)).subscribe(
      (data) => {
        showLoading({ message: 'Enviando datos...', url: '/home', router: this.router });
        this.storageService.set('arbol', data);
        showToast({message: `Arbol enviado correctamente`, type: 'success'});
      },
      ({ status }) => {
        showToast({ message: `Ha ocurrido un error- Status: ${status}`, type: 'error'});
      }
    );
  }

}
