import { Component }    from '@angular/core';
import { IGame }        from "../../shared/interfaces/game.interface";
import { WordsService } from "../../shared/services/words.service";
//import { IWord }        from "../../shared/interfaces/word.interface";
import { UserService }  from "../../shared/services/user.service";
import {IUser}          from "../../shared/interfaces/user.interface";

@Component({
  selector: 'tag-game1',
  templateUrl: 'tag-game1.html',
  providers: [ WordsService, UserService ]
})
export class TagGame1Component {

  seconds: number = 14;
  gameResults: boolean = false;
  intv: any;
  game: IGame;
  user: IUser;

  constructor(wordService: WordsService, userService: UserService) {

    this.user = userService.getUser();

    this.game = {
      question: "Mouse",
      answers: [],
      rightAnswer: 1
    }
    console.log('baseExperience', this.user.baseExperience)

     wordService.getRandomWordsArray("Животные", 3, 2+this.user.baseExperience).then(
         (data)=>{
           this.game.answers = data;
         }
    )

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
