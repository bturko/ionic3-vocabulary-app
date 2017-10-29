import { Component } from '@angular/core';

@Component({
  selector: 'tag-game1',
  templateUrl: 'tag-game1.html'
})
export class TagGame1Component {

  seconds: number = 30;

  constructor() {
    console.log('Hello TagGame1Component Component');

    setInterval(function(){
      --this.seconds;
      console.log(this.seconds)
    }, 1000)
  }

  choose(id){
    alert(id + "choosed")
  }

  ionViewDidLoad() {

  }


}
