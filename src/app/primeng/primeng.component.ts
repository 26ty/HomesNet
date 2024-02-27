import { Component } from '@angular/core';
import { Product } from '../data/primeng-datas/product';
@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})
export class PrimengComponent {
  products= Product;
}
