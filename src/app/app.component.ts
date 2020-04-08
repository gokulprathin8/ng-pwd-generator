import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  onChangeLength = 0;
  onChangeUseLetters = false;
  onChangeUseNumbers = false;
  onChangeUseSymbols = false;

  onChangeUseLettersPressed() {
    this.onChangeUseLetters = !this.onChangeUseLetters;
  }

  onChangeUseNumbersPressed() {
    this.onChangeUseNumbers = !this.onChangeUseNumbers;
  }

  onChangeUseSymbolsPressed() {
    this.onChangeUseSymbols = !this.onChangeUseSymbols;
  }

  onChangeLengthPressed(value: string) {
    const parsedValue = parseInt(value);
    this.onChangeLength = parsedValue;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const alphabetss = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*(),./;:';

    let validChars = '';

    if(this.onChangeUseLetters) {
      validChars += alphabetss;
    }
    if(this.onChangeUseNumbers) {
      validChars += numbers;
    }
    if(this.onChangeUseSymbols) {
      validChars += symbols;
    }

    let finalGeneratedPassword = '';
    for(let i=0; i<this.onChangeLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      finalGeneratedPassword += validChars[index];
    }

    console.log(`
      About to generate a password with the following:
        Includes Letters: ${this.onChangeUseLetters}
        Includes Numbers: ${this.onChangeUseNumbers}
        Includes Symbols: ${this.onChangeUseSymbols}
    `)
    this.password = finalGeneratedPassword;
  }

}
