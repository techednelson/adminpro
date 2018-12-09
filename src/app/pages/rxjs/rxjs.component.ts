import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription} from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.returnObservable()
    .subscribe(
        num => console.log('subs', num),
        error => console.error('Error with the observable', error),
        () => console.log('The observable ended')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('The page will be destroyed');
    this.subscription.unsubscribe();
  }

  public returnObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;

        const exit = {
          value: counter
        };

        observer.next(exit);
        if (counter === 3) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000);
    })
    .pipe(
      map(response => response.value),
      filter((value) => value % 2 === 1)
    );
  }

}
