import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{

  DefaultHero:Hero[]
  ngOnInit(): void {
    this.DefaultHero =[
      new Hero('兩斤勘吉',35),
      new Hero('秋本麗子',25),
      new Hero('野比大雄',12),
    ]
    this.DefaultHero.push(new Hero('江戶川柯南', 8))
    console.log(this.DefaultHero)
  }

  heros = [
    { name: '兩斤勘吉', age: 35 },
    { name: '秋本麗子', age: 25 },
    { name: '野比大雄', age: 12 },
    { name: '江戶川柯南', age: 8 }
  ];

  getAddHero(newHero){
    console.log("hero.component newHero",newHero)
    this.DefaultHero.push(newHero);
  }

}

export class Hero{
  name: string;
  age: number;
  constructor(name:string,age:number){
    this.name = name;
    this.age = age
  }
  sayHi(){
    console.log("hi")
  }
}
