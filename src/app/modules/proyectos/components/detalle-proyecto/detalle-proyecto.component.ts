import { UiService } from './../../../utils/ui.service';
import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap, tap } from 'rxjs/operators';

import { ProjectService } from '../../proyecto.service';


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
    const projectId = this.proyecto.id;
    await this.uiService.cargando(true);
    this.uiService.toast('Procesando el archivo.', 'tertiary');
    this.projectService.exportTreesToCSV(projectId).subscribe(
      blob => {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = `arboles_${projectId}.csv`;
        a.click();
        URL.revokeObjectURL(objectUrl);
        this.uiService.cargando(false);
      },
      error => {
        this.uiService.cargando(false);
        this.uiService.toast('Error al procesar el archivo.', 'danger');
        console.error('Error al exportar CSV:', error);
      }
    );
  }
}
