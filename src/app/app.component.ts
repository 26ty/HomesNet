import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'HomesNet';
  sideNavOpened = false;

  toggleSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
  }
}
