import { Component } from '@angular/core';
import { sidnav } from '../data/sidnav-datas/sidnav-datas';
import { SidenavService } from '../sidenav.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  sidenavList = sidnav
  constructor(){

  }
}
