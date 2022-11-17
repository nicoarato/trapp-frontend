import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/guards/auth.guard';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./modules/auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path: '',
        loadChildren: () =>
            import('./pages/index.module').then((m) => m.IndexModule),
        canLoad: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
