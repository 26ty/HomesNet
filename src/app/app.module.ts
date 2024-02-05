import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // 導入 ReactiveFormsModule
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingLocationComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // 添加 ReactiveFormsModule
    // RouterModule.forRoot([
    //   {path:"",component:HomeComponent},
    //   {path:"details/:id",component:DetailsComponent}
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
