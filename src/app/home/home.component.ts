import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation} from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  // 宣告HousingLocation物件
  housingLocationList: HousingLocation[] = [];
  // 獲取HousingService服務
  housingService: HousingService = inject(HousingService);
  // 過濾房屋位置列表
  filteredLocationList: HousingLocation[] = [];

  test:string="test input"
  constructor() {
    // 取得房屋資料
    this.housingLocationList = this.housingService.getAllHousingLocations();
    console.log(this.housingLocationList)

    // 賦值給過濾房屋位置列表
    this.filteredLocationList = this.housingLocationList;
  }

  /**
   * 過濾房屋搜尋結果
   * @param text
   * @returns
   */
  filterResults(text: string) {
    if (!text) {
      // 賦值給 filteredLocationList
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    // 過濾housingLocationList後的結果賦值給filteredLocationList
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
