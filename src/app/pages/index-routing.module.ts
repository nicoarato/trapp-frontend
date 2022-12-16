import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then((m) => m.HomePageModule)
    },
    {
        path: 'arboles',
        loadChildren: () =>
            import('./arboles/arboles.module').then((m) => m.ArbolesModule)
    },
    {
        path: 'proyectos',
        loadChildren: () =>
            import('./proyectos/proyectos.module').then(
                (m) => m.ProyectosModule
            )
    },
    {
        path: 'reportes',
        loadChildren: () =>
            import('./reportes/reportes.module').then((m) => m.ReportesModule)
    },
    {
        path: 'usuarios',
        loadChildren: () =>
            import('./usuarios/usuarios.module').then((m) => m.UsuariosModule)
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
