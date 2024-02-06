 import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit{
  // @Input() inputDefaultHero
  @Output() AddHero = new EventEmitter<any>() //輸出事件

  ngOnInit(): void {
    console.log(this.inputDefaultHero)
  }
  // options: FormGroup;
  // constructor(fb: FormBuilder){
  //   this.options = fb.group({
  //     name: '',
  //     age: 0,
  //   });
  // }

  // class宣告初始物件
  // inputDefaultHero:Hero = new Hero('', 0)

  // interface宣告初始物件
  inputDefaultHero:Hero = {name:'',age:0}

  addHero(){
    console.log(this.inputDefaultHero)
    // 將inputDefaultHero傳送出去給父組件
    this.AddHero.emit(this.inputDefaultHero)
    // 清空inputDefaultHero
    this.inputDefaultHero = {name:'',age:0}
    //this.inputDefaultHero = new Hero('betty',18)
    //this.inputDefaultHero.sayHi()
  }
}

export interface Hero {
  name: string;
  age: number;
}

// export class Hero{
//   name: string;
//   age: number;
//   constructor(name:string,age:number){
//     this.name = name;
//     this.age = age
//   }
//   sayHi(){
//     console.log("hi")
//   }
// }
