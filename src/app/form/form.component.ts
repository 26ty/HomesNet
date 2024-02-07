import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelloComponent } from '../hello/hello.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild(HelloComponent) hello: HelloComponent;
  applyForm: FormGroup; // 定義一個表單稱為applyForm，並且表單的型別為FormGroup，也就是表單的集合。

  constructor(private fb: FormBuilder) { } // 將表單相關元件啟動，並給予名稱fb

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.hello.counter)
    this.hello.sayHi();
  }

  userName: string
  password: string
  email: string
  ngOnInit(): void {
    this.applyForm = this.fb.group({ // 在元件啟動的時候建立每個表單的控制元件
      userName: ["可以預設資料"],
      password: [""],
      email: [""]
    });



  }

  onAddOneClick() {
    this.hello.addOne();
  }

  onMinusOneClick() {
    this.hello.minusOne();
  }
}
