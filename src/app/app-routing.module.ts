import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import { HeroComponent } from './hero/hero.component';
import { FormComponent } from './form/form.component';
import { PrimengComponent } from './primeng/primeng.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "heros", component: HeroComponent },
  { path: "forms", component: FormComponent },
  { path: "primeng", component:PrimengComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
