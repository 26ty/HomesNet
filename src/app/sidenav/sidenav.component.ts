import { Component ,OnInit, inject ,Input} from '@angular/core';
import { sidnav } from '../data/sidnav-datas/sidnav-datas';
import { SidenavService } from '../sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  sidenavList = sidnav

  // 接收來自父組件的sideNavOpened狀態
  @Input() sideNavOpened:boolean;
  constructor(){

  }
  ngOnInit(): void {

  }
}
