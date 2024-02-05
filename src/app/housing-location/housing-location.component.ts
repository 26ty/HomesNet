import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  // @Input() housingLocation?: HousingLocationComponent;
  @Input() housingLocation!: HousingLocation;
  id!: number;
  name!: string;
  city!: string;
  state!: string;
  photo!: string;
  availableUnits!: number;
  wifi!: boolean;
  laundry!: boolean;

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
