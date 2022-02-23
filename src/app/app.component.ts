import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'typing-challenge';

  randomText = lorem.sentence();
  userText = '';

  onkeyUp(value: string) {
    this.userText = value;
  }

  compare(letter: string, userText: string) {
    if (!userText) {
      return 'pending';
    }
    return letter === userText ? 'correct' : 'incorrect';
  }
}
