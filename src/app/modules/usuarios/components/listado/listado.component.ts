import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {

  listado: any;
  usuarios: any[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data) => {
      this.listado = data;
      this.usuarios = this.listado.result;
    });
  }

  handleSearch({target: { value }}) {
    this.usuarios = this.listado.result.filter(({name, username}) =>
    name.toLowerCase().includes(value.toLowerCase())
    || username.toLowerCase().includes(value.toLowerCase())
    );
  }

}
