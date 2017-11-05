import { Component }    from '@angular/core';
import { IGame }        from "../../shared/interfaces/game.interface";
import { WordsService } from "../../shared/services/words.service";
import { UserService }  from "../../shared/services/user.service";
import {IUser}          from "../../shared/interfaces/user.interface";

@Component({
  selector: 'tag-game1',
  templateUrl: 'tag-game1.html',
  providers: [ WordsService, UserService ]
})
export class TagGame1Component {

  gameResults: boolean = false;
  intvlHandle: any;
  game: IGame;
  user: IUser;
  wordService: WordsService;

  constructor(wordService: WordsService, userService: UserService) {

    this.wordService = wordService;
    this.user = userService.getUser();

    this.game = {
      questions: [],
      rightAnswerCount: 0,
      askedCount: 0
    }
    console.log('baseExperience', this.user.baseExperience)

   this.setGame();

    this.intvlHandle = setInterval(()=>{
      --this.game.seconds;
      if(this.game.seconds < 1) {
        this.gameResults = true;
        clearInterval(this.intvlHandle);
      }
    }, 1000)
  }

  choose(id){
    if(this.game.questions[this.game.askedCount].rightAnswer == id) this.game.rightAnswerCount++;
    console.log('choose', this.game.rightAnswerCount)
    this.setGame();
  }

  ionViewDidLoad() {

  }

  setGame(){
    this.wordService.getRandomWordsArray("Животные", 3, 2+this.user.baseExperience).then(
        (data)=>{
          this.game.questions.push(data);
        }
    );
  }


}
