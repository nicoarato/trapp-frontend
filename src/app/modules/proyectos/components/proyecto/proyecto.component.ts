import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from '../../projecto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    localidad: new FormControl('', [Validators.required]),
    provincia: new FormControl('', [Validators.required]),
    domicilio: new FormControl('', [Validators.required]),
    tiempoEstimado: new FormControl('', [Validators.required]),
    updatedAt: new FormControl('', [Validators.required]),
    createdAt: new FormControl('', [Validators.required]),

  });
  checkedForm = true;
  date: any;
  codigoProyecto: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService
    ) {
      this.activatedRoute.params.subscribe(params => {
        this.projectService.getProject(params.id).subscribe(({result}) => {
          this.proyecto = result;
          console.log('Proyecto', this.proyecto);
          this.cargarDatos(this.proyecto);
        });
      });
    }

  ngOnInit() {
  }
  handleChange() {
    this.checkedForm = !this.checkedForm;
  }

  setValue(key,value) {
    this.form.get(key).setValue(value);
  }

  actualizar() {
    const datos = this.form.value;
    this.projectService.updateProject(datos);
  }

  cargarDatos(datos) {
    Object.keys(datos).map(x => {
      this.setValue(x, datos[x]);
    });
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    console.log(new Date(datos.createdAt).toLocaleString());
    this.codigoProyecto = datos.id;
    this.date = new Date(datos.createdAt).toLocaleString();
    this.setValue('createdAt', new Date(datos.createdAt));
  }

}
