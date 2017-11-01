import { Component } from '@angular/core';
import {IGame} from "../../shared/interfaces/game.interface";


@Component({
  selector: 'tag-game1',
  templateUrl: 'tag-game1.html'
})
export class TagGame1Component {

  seconds: number = 14;
  gameResults: boolean = false;
  intv: any;
  game: IGame;

  constructor() {
    //console.log('Hello TagGame1Component Component');
    this.game = {
      question: "Mouse",
      answers: [
        {word: "Мышь"},
        {word: "Лев"},
        {word: "Дракон"}
      ],
      rightAnswer: 1
    }

    this.intv = setInterval(()=>{
      --this.seconds;
      if(this.seconds < 1) {
        this.gameResults = true;
        clearInterval(this.intv);
      }
    }, 1000)
  }

  choose(id){
    //alert(id + "choosed")
  }

  ionViewDidLoad() {

  }


}
