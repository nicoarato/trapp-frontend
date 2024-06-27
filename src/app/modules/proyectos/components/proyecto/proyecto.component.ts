import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { ProjectService } from '../../proyecto.service';
import { UiService } from './../../../utils/ui.service';

interface Proyecto {
  id: number;
  nombre: string;
  localidad: string;
  provincia: string;
  tiempoEstimado: string;
};

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss'],
})
export class ProyectoComponent implements OnInit {

  proyecto: Proyecto;

  form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    localidad: new FormControl('', [Validators.required]),
    provincia: new FormControl('', [Validators.required]),
    tiempoEstimado: new FormControl('', [Validators.required]),
  });
  checkedForm = true;
  date: any;
  codigoProyecto: number;

  keys = ['nombre', 'localidad', 'provincia', 'tiempoEstimado'];


  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private alertController: AlertController,
    private uiService: UiService,
    private router: Router,
    ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.projectService.getProject(params.id).subscribe(({result}) => {
        this.proyecto = result;
        console.log('Proyecto', this.proyecto);
        this.cargarDatos(this.proyecto);
      });
    });
  }
  handleChange() {
    this.checkedForm = !this.checkedForm;
  }

  setValue(key,value) {
    this.form.get(key).setValue(value);
  }

  actualizar() {
    const datos = this.form.value;
    this.uiService.cargando(true);
    this.projectService.update(this.proyecto.id, datos)
    .subscribe(({statusCode})=> {
      this.uiService.cargando(false);
      if (statusCode === 200){
        this.uiService.toast('Proyecto actualizado correctamente.', 'success');
        this.router.navigateByUrl(`/proyectos`);
      }
    },
    error => {
      console.log(error);
      this.uiService.cargando(false);
      this.uiService.toast('Hubo un error al actualizar. Intente nuevamente.', 'danger');

    });
  }

  cargarDatos(datos) {
    this.keys.map(x => {
      this.setValue(x, datos[x]);
    });
  }

  eliminarProyecto() {
    console.log('Eliminado');
    this.presentAlert();
  }

  eliminar() {
    this.uiService.cargando(true);
      this.projectService.deleteById(this.proyecto.id)
      .subscribe(({statusCode})=> {
        this.uiService.cargando(false);
        if (statusCode === 200){
          this.uiService.toast('Proyecto eliminado correctamente.', 'success');
          this.router.navigateByUrl(`/proyectos`);
        }
      },
      error => {
        console.log(error);
        this.uiService.cargando(false);
        this.uiService.toast('Hubo un error al eliminar. Intente nuevamente.', 'danger');

      });
   }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Eliminar este proyecto',
      subHeader: '¿Estas seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { },
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            this.eliminar();
          },
        },
      ],
    });

    await alert.present();

  }

}
