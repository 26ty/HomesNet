import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 導入 ReactiveFormsModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// material
import { MatSidenavModule } from '@angular/material/sidenav';//sidemodule
import { MatToolbarModule } from '@angular/material/toolbar';//toolbar
import { MatIconModule } from '@angular/material/icon';//icon
import { MatListModule } from '@angular/material/list';//List
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HeroComponent } from './hero/hero.component';//button

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingLocationComponent,
    DetailsComponent,
    TopBarComponent,
    SidenavComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // 添加 ReactiveFormsModule
    // RouterModule.forRoot([
    //   {path:"",component:HomeComponent},
    //   {path:"details/:id",component:DetailsComponent},
    //   { path: "heros", component: HeroComponent }
    // ]),
    // Material
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
