import { Component }       from '@angular/core';
import { IGame }           from "../../shared/interfaces/game.interface";
import { WordsService }    from "../../shared/services/words.service";
import { QuestionService } from "../../shared/services/question.service";
import { UserService }     from "../../shared/services/user.service";
import { IUser }           from "../../shared/interfaces/user.interface";
import { IQuestionEntity } from "../../shared/types/question.type";
import { Game }            from '../../shared/types/game.type';

@Component({
  selector: 'tag-game1',
  templateUrl: 'tag-game1.html',
  providers: [ UserService, WordsService, QuestionService ]
})
export class TagGame1Component {

  gameResults: boolean = false;
  intvlHandle: any;
  game: IGame;
  user: IUser;
  wordService: WordsService;
  questionService: QuestionService;
  curQuestion: IQuestionEntity;
  stars: number[] = [1, 2, 3];

  constructor(
      wordsService: WordsService,
      userService: UserService,
      questionService: QuestionService
  ) {

    this.wordService = wordsService;
    this.questionService = questionService;
    this.user = userService.user;

    this.game = new Game();
    this.game.questions = [];
    this.game.askedCount = 0;
    this.game.rightAnswerCount = 0;
    this.game.currentCategory = "Животные";
    this.game.questions[this.game.askedCount];

    this.wordService.initWords().then(
        ()=>this.setGame()
    )

    this.game.seconds = 14;
    //this.user.availableCategories = [0];

    this.intvlHandle = setInterval(()=>{
      --this.game.seconds;
      if(this.game.seconds < 1) {
        this.gameResults = true;
        clearInterval(this.intvlHandle);
      }
    }, 1000)
  }

  choose(id){
    if(this.game.questions[this.game.askedCount].rightAnswer == id) {
      this.game.rightAnswerCount++;
      this.wordService.addKnownWord(this.game.questions[this.game.askedCount].words[id].id);
    }
    this.game.askedCount = this.game.askedCount + 1
    this.setGame();
  }

  ionViewDidLoad() {

  }

  setGame(){
    let wordExceptionsList: number[] = this.game.questions.map((a)=> a.rightAnswer);
    let question =  this.questionService.getQuestion(this.game.currentCategory, 3, 2+this.user.baseExperience, wordExceptionsList)
    //console.log('setGame', question, this.game.currentCategory, 3, 2+this.user.baseExperience, wordExceptionsList);
    this.game.questions.push(question);
    this.curQuestion = this.game.questions[this.game.askedCount];
    console.log('this.curQuestion', this.curQuestion);
  }
}