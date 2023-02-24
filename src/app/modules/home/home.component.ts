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
