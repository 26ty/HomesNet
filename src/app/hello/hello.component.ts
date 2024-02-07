import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Input() name: string

  counter = 10;

  public sayHi(){
    console.log("Hi!!!")
  }

  addOne(){
    this.counter += 1;
  }

  minusOne(){
    if(this.counter>0){
      this.counter -= 1;
    }else{
      console.log("error!")
    }
  }


}
