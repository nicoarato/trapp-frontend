/* eslint-disable @typescript-eslint/naming-convention */
import showToast from 'src/app/helpers/toast';
import showLoading from 'src/app/helpers/loading';
import { TreesService } from './../../../services/trees/trees.service';
import { StorageService } from './../../../services/storage/storage.service';
import { User } from './../../../interfaces/users.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
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

  user: User;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storageService: StorageService,
    private arbolesService: TreesService,
  ) {}

  newDate() {
    const date = new Date().toISOString();
    return date;
  }

  async ngOnInit() {
    this.form = this.fb.group({
      direccion: ['', [Validators.required]],
      barrio: ['', [Validators.required]],
      manzana: ['', [Validators.required,]],
      faltante: [false, [Validators.required,]],
      muerto: [false, [Validators.required,]],
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
      platoRadicularOrRaicesExpuestas: [false],
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

    this.user = await this.storageService.get('user');
  }

  getValue(key, { target: { value } }) {
    this.form.get(key).setValue(value);
  }

  getChecked(key) {
    const valor = this.form.get(key).value;
    this.form.get(key).setValue(!valor);
  }

  getStateSend(): boolean {
    const values = ['muerto', 'faltante'];
    const conditions = values.filter(x => this.form.get(x).value);
    return conditions.length > 0;
  }

  reset() {
    console.log(this.form.value);
    this.saveData();
  }

  async saveData() {
    // hardcode arbol para mi backend
      const arbolito = {
        coordenadas: [-20.00001, -20.11111],
        direccion: 'Sarasa 123456',
        name: 'Algarrobo colorado',
        phone: '111-121212',
        zip_code: '3080',
        tree_id: 'AAA019',
        version: 'test',
        userId: '62afe66796aea8df2ae17ef1',
        fecha_inicio_relevamiento: '2022-07-18T01:34:03.087Z',
        fecha_fin_relevamiento: '2022-07-18T01:34:42.130Z'
      };
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
