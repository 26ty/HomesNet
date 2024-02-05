import { Component,EventEmitter,Input,Output } from '@angular/core';
import { sidnav } from '../data/sidnav-datas/sidnav-datas';
import { SidenavService } from '../sidenav.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  sidenavList = sidnav

  @Input() sideNavOpened:boolean;
  @Output() toggleSideNav = new EventEmitter<void>();

  onToggleSideNav() {
    this.toggleSideNav.emit();
  }
  constructor(){

  }
}
