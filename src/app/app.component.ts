import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { letters } from './helpers/letters';
import { wordPicker } from './helpers/random-words ';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {
  title = 'hangman';
  public letters: any[] = letters;
  word:string = '';
    hiddenWord = '';
  attempts = 0;
  won = false;
  lost = false;
  crossOutLetters: string[] = [];


  constructor() {
    this.newGame();
  }

   checkLetter(letter: string) {
    console.log(letter);
    
    letters.forEach((unit) => {
      if (unit.value === letter) {
        unit.state = 1;
      }
    }); 

    if (!this.word.includes(letter)) {

      this.attempts = Math.min(this.attempts + 1, 9);
    }

   console.log(this.crossOutLetters);

    const hiddenWordArr = this.hiddenWord.split(' ');
    console.log(hiddenWordArr);

    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        hiddenWordArr[i] = letter;
      }
    }
    this.hiddenWord = hiddenWordArr.join(' ');
    console.log('Hidden word:', this.hiddenWord);

    this.checkWinner();
  }

  checkWinner() {
    const wordArr = this.hiddenWord.split(' ');
    const rightWord = wordArr.join('');

    if (rightWord === this.word) {
      this.won = true;
      console.log('You won!');
    }

    if (this.attempts >= 9) {
      this.lost = true; 
      letters.forEach(val => val.state = 1)
    }
  }

  newGame() {
    this.attempts = 0;
    this.won = false;
    this.lost = false;
    this.word = wordPicker();
    this.hiddenWord = '_ '.repeat(this.word.length);
    letters.forEach(val => val.state = 0)

  }
}
