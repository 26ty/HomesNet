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

  // 接收來自父組件的sideNavOpened狀態
  @Input() sideNavOpened:boolean;
  // 發送toggleSideNav事件給父組件
  @Output() toggleSideNav = new EventEmitter<void>();

  onToggleSideNav() {
    this.toggleSideNav.emit();
  }
  constructor(){

  }
}
