import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  sideNav: MatSidenav;

  toggle() {
    this.sideNav.toggle();
  }

  open() {
    this.sideNav.open();
  }

  close() {
    this.sideNav.close();
  }
}
