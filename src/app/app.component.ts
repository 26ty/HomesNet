import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'HomesNet';
  // 預設sideNav為關閉狀態
  sideNavOpened = false;

  // 開啟或關閉sideNav
  toggleSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
  }
}
