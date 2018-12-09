import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.countThree()
    .then((message) => console.log(`It's over`, message))
    .catch(error => console.log('There was an error with the promise', error));
  }

  ngOnInit() {
  }

  private countThree(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        console.log(counter);
        if (counter === 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
