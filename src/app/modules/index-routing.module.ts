import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('../../app/modules/home/home.module').then((m) => m.HomePageModule)
    },
    {
        path: 'arboles',
        loadChildren: () =>
            import('../../app/modules/arboles/arboles.module').then((m) => m.ArbolesModule)
    },
    {
        path: 'proyectos',
        loadChildren: () =>
            import('../../app/modules/proyectos/proyectos.module').then((m) => m.ProyectosModule)
    },
    {
        path: 'reportes',
        loadChildren: () =>
            import('../../app/modules/reportes/reportes.module').then((m) => m.ReportesModule)
    },
    {
        path: 'usuarios',
        loadChildren: () =>
            import('../../app/modules/usuarios/usuarios.module').then((m) => m.UsuariosModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndexRoutingModule {}
