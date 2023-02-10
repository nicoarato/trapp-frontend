import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  textFooter = 'Trapp v1.0.0';

  constructor() { }

  ngOnInit() {}

}
