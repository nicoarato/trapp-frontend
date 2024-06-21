import { AlertController } from '@ionic/angular';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isAdmin: boolean;

  adminItems = [
    {
      link: '/proyectos',
      img: '../../assets/icon/direcciones.png',
      label: 'Proyectos',
      class: 'logo-on',
    },
    {
      link: '/usuarios',
      img: '../../assets/icon/usuario.png',
      label: 'Usuarios',
      class: 'logo-on',
    },
    {
      link: '/proyectos',
      img: '../../assets/icon/reporte.png',
      label: 'Reportes',
      class: 'logo-on',
    }
  ];

  items = [
    {
      link: '/arboles',
      img: '../../assets/icon/logoMod.png',
      label: 'Registro de árboles',
      class: 'logo-on',
    },
    {
      link: '/arboles',
      img: '../../assets/icon/logoMod.png',
      label: 'Registro de árboles',
      class: 'logo-off',
    },
  ];

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
    ) { }

  ngOnInit() {
    this.authService.isAdmin().subscribe(res => {
      this.isAdmin = res;
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      subHeader: 'Estas seguro?',
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
            this.authService.logout();
            this.router.navigateByUrl('/auth');
          },
        },
      ],
    });

    await alert.present();

  }
}
