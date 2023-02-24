import { UiService } from './../../../utils/ui.service';
import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap, tap } from 'rxjs/operators';

import { ProjectService } from './../../projecto.service';


@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.scss'],
})
export class DetalleProyectoComponent implements OnInit {

  arboles: any[];
  proyecto: any;
  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private uiService: UiService,

    ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap(params => this.projectService.getTreesByProject(params.id).pipe(
        tap(({result}) => this.arboles = result),
        mergeMap(() => this.projectService.getProject(params.id))
      ))
    ).subscribe(({result}) => {
      this.proyecto = result;
    });
  }

  redirectToTree(id: number) {
    this.router.navigateByUrl(`/arboles/detalle/${id}`);
  }

  async exportarCsv() {
    console.log('Agregar funcionalidad');
    await this.uiService.cargando(true);
    this.uiService.toast('Procesando el archivo.', 'tertiary');
  }
}
