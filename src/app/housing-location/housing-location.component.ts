import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent implements OnInit {
  // @Input() housingLocation?: HousingLocationComponent;
  @Input() housingLocation!: HousingLocation;
  // @Input() test:string;

  // id!: number;
  // name!: string;
  // city!: string;
  // state!: string;
  // photo!: string;
  // availableUnits!: number;
  // wifi!: boolean;
  // laundry!: boolean;

  ngOnInit(): void {
  }
}
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
