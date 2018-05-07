import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CoverService {
  backgroundUrl$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  height$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  pageTitle$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  pageDetails$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  setBackgroundUrl(url: string) {
    this.backgroundUrl$.next(`url(${url}) top center`);
  }

  setHeight(height: number) {
    this.height$.next(`${height}px`);
  }

  setPageTitle(title: string) {
    this.pageTitle$.next(`${title}`);
  }

  setPageDetails(details: string) {
    this.pageDetails$.next(`${details}`);
  }

}
