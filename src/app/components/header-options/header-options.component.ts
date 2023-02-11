import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-options',
  templateUrl: './header-options.component.html',
  styleUrls: ['./header-options.component.scss'],
})
export class HeaderOptionsComponent implements OnInit {
  @Input() title: string;
  @Input() href: string;
  constructor() { }

  ngOnInit() {}

}
