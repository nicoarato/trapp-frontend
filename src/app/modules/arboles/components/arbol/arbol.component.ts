import { UiService } from './../../../utils/ui.service';
import { ProjectService } from 'src/app/modules/proyectos/proyecto.service';
import { StorageService } from './../../../utils/storage.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IonSlides } from '@ionic/angular';

import { TreesService } from '../../arboles.service';

import { transformProjects } from 'src/app/modules/proyectos/transform';

import { Geolocation } from '@capacitor/geolocation';

import showToast from 'src/app/helpers/toast';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-arbol',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.scss'],
})
export class ArbolComponent implements OnInit {
  @ViewChild('mySlider', { static: true }) slides: IonSlides;

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


  arbol: any = {};
  checkedForm = true;

  proyectoId: number;

  keys = [

    'agallasTermiterosHormigueros',
    'altura',
    'barrio',
    'coeficienteDeEsbeltez',
    'conCortezaIncluida',
    'conDefectosAdicionales',
    'cortezaPerdidaMuerta',
    'createdAt',
    'defectosEnRaices',
    'densidadDeCopa',
    'direccion',
    'enfermedades',
    'espacioDeCrecimiento',
    'especie',
    'exposicionAlVientoDominante',
    'exudacionDeSavia',
    'faltante',
    'forma',
    'inclinacion',
    'latitud',
    'longitud',
    'lxCancroTronco',
    'manzana',
    'movilidadDeBlanco',
    'muerto',
    'nombre',
    'perimetro',
    'plagas',
    'platoRadicularORaicesExpuestas',
    'proyecto',
    'raicesCuerposFructiferos',
    'raicesDanoMecanico',
    'raicesEstrangulantes',
    'ramasCancros',
    'ramasCavidades',
    'ramasColgantesQuebrantes',
    'ramasCuerposFructiferosEnHongos',
    'ramasHorquetaConCorteza',
    'ramasHorquetaConDefectos',
    'ramasHorquetas',
    'ramasInterferenciaElectrica',
    'ramasMuertas',
    'ramasPudricionDeMadera',
    'ramasRajaduras',
    'ramasSobreextendidas',
    'restriccionDeUso',
    'tasaDeUso',
    'tEspesorDeParedTronco',
    'troncoCancros',
    'troncoCavidades',
    'troncoFustesMultiples',
    'troncoHeridas',
    'troncoHorquetas',
    'troncoInclinacion',
    'troncoOrificios',
    'troncoPudricionDeMadera',
    'troncoRajaduras',
    'usoBajoElArbol',
    'valorDeArbol',
    'vigor',

  ];

  form: FormGroup = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      proyecto: new FormControl(null),
      direccion: new FormControl(''),
      barrio: new FormControl(''),
      manzana: new FormControl(''),
      faltante: new FormControl(''),
      muerto: new FormControl(''),
      createdAt: new FormControl(''),
      latitud: new FormControl(''),
      longitud: new FormControl(''),
      especie: new FormControl(''),
      perimetro: new FormControl(''),
      altura: new FormControl(''),
      inclinacion: new FormControl(''),
      forma: new FormControl(''),
      valorDeArbol: new FormControl(''),
      enfermedades: new FormControl(''),
      plagas: new FormControl(''),
      exposicionAlVientoDominante: new FormControl(''),
      vigor: new FormControl(''),
      densidadDeCopa: new FormControl(''),
      // condiciones de sitio
      espacioDeCrecimiento: new FormControl(''),
      platoRadicularORaicesExpuestas: new FormControl(''),
      // blanco bajo el arbol
      usoBajoElArbol: new FormControl(''),
      tasaDeUso: new FormControl(''),
      movilidadDeBlanco: new FormControl(''),
      restriccionDeUso: new FormControl(''),
      // defectos en las raices
      defectosEnRaices: new FormControl(''),
      raicesCuerposFructiferos: new FormControl(''),
      raicesDanoMecanico: new FormControl(''),
      raicesEstrangulantes: new FormControl(''),


      agallasTermiterosHormigueros: new FormControl(''),
      troncoCancros: new FormControl(''),
      lxCancroTronco: new FormControl(''),
      troncoCavidades: new FormControl(''),
      tEspesorDeParedTronco: new FormControl(''),
      cortezaPerdidaMuerta: new FormControl(''),
      exudacionDeSavia: new FormControl(''),
      coeficienteDeEsbeltez: new FormControl(''),
      conCortezaIncluida: new FormControl(''),
      conDefectosAdicionales: new FormControl(''),

      troncoOrificios: new FormControl(''),
      troncoFustesMultiples: new FormControl(''),
      troncoHeridas: new FormControl(''),
      troncoHorquetas: new FormControl(''),
      troncoInclinacion: new FormControl(''),
      troncoPudricionDeMadera: new FormControl(''),
      troncoRajaduras: new FormControl(''),

      ramasHorquetas: new FormControl(''),
      ramasHorquetaConCorteza: new FormControl(''),
      ramasHorquetaConDefectos: new FormControl(''),
      ramasCancros: new FormControl(''),
      ramasCavidades: new FormControl(''),
      ramasCuerposFructiferosEnHongos: new FormControl(''),
      ramasColgantesQuebrantes: new FormControl(''),
      ramasMuertas: new FormControl(''),
      ramasRajaduras: new FormControl(''),
      ramasPudricionDeMadera: new FormControl(''),
      ramasInterferenciaElectrica: new FormControl(''),
      ramasSobreextendidas: new FormControl(''),
  });

  constructor(
    private router: Router,
    private arbolesService: TreesService,
    private activatedRoute: ActivatedRoute,
    private uiService: UiService,
    private navController: NavController,
    ) { }

    ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.arbolesService.getTreeById(params.id).subscribe(({ result }) => {
        this.arbol = result;
        console.log('Arbolito', this.arbol);
        this.cargarDatos({...this.arbol});
        this.proyectoId = this.arbol.proyecto.id;
      });
    });
  }

  setValue(key, value) {
    this.form.get(key).setValue(value);
  }

  cargarDatos(datos) {
    this.keys.map(x => {
      this.setValue(x, datos[x]);
    });
    this.setValue('id', this.arbol.id);
  }

  reset() {
    this.actualizar();
  }

  handleChange() {
    this.checkedForm = !this.checkedForm;
  }


  actualizar() {
      const datos = this.form.value;
      console.log('Actualizar: ', datos);
      console.log('Actualizar proyectoId: ', this.proyectoId);
      this.uiService.cargando(true);
      this.arbolesService.update(this.arbol.id, datos)
      .subscribe(({statusCode})=> {
        this.uiService.cargando(false);
        if (statusCode === 200){
          this.uiService.toast('Árbol actualizado correctamente.', 'success');
          this.router.navigateByUrl(`/proyectos/detalle/${this.proyectoId}/arboles`);
        }
      },
      error => {
        console.log(error);
        this.uiService.cargando(false);
        this.uiService.toast('Hubo un error al actualizar. Intente nuevamente.', 'danger');

      });
  }

  async getCoordinates() {
    this.uiService.cargando(true);
    const {coords: {latitude, longitude}} = await Geolocation.getCurrentPosition();
    this.uiService.cargando(false);
    this.form.get('latitud').setValue(latitude);
    this.form.get('longitud').setValue(longitude);
   }

   eliminar() {
    this.uiService.cargando(true);
      this.arbolesService.deleteById(this.arbol.id)
      .subscribe(({statusCode})=> {
        this.uiService.cargando(false);
        if (statusCode === 200){
          this.uiService.toast('Árbol eliminado correctamente.', 'success');
          this.router.navigateByUrl(`/proyectos/detalle/${this.proyectoId}/arboles`);
        }
      },
      error => {
        console.log(error);
        this.uiService.cargando(false);
        this.uiService.toast('Hubo un error al eliminar. Intente nuevamente.', 'danger');

      });
   }

}
