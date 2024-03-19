import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 導入 ReactiveFormsModule
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // 引入FormsModule

// material
import { MatSidenavModule } from '@angular/material/sidenav';//sidemodule
import { MatToolbarModule } from '@angular/material/toolbar';//toolbar
import { MatIconModule } from '@angular/material/icon';//icon
import { MatListModule } from '@angular/material/list';//List
import { MatDividerModule } from '@angular/material/divider';//divider
import { MatButtonModule } from '@angular/material/button';//button
import {MatFormFieldModule} from '@angular/material/form-field';//FormField

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeroComponent } from './hero/hero.component';
import { AddHeroComponent } from './hero/add-hero/add-hero.component';
import { FormComponent } from './form/form.component';
import { HelloComponent } from './hello/hello.component';
import { PrimengComponent } from './primeng/primeng.component';

// primeng
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingLocationComponent,
    DetailsComponent,
    TopBarComponent,
    SidenavComponent,
    HeroComponent,
    AddHeroComponent,
    FormComponent,
    HelloComponent,
    PrimengComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // 添加 ReactiveFormsModule
    FormsModule,
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
    MatFormFieldModule,
    // primeNG
    ButtonModule,
    TableModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
