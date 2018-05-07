import {Component, OnChanges, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {CoverService} from './shared/services/cover.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';
  background;
  height;
  searchHeight;
  cover: 'cover';
  pageTitle;
  pageDetails;
  constructor(private coverService: CoverService,
              private sanitization: DomSanitizer) {}
  ngOnInit() {
    this.coverService.backgroundUrl$.subscribe(
      url => {
        this.background = this.sanitization.bypassSecurityTrustStyle(url);
      }
    );
    this.coverService.height$.subscribe(
      height => {
        this.height = height;
        console.log(this.height);
        if (this.height == '700px') {
          this.searchHeight = '611.25px';
        }
        else {
          this.searchHeight = '418.25px';
        }
      }
    );
    this.coverService.pageTitle$.subscribe(
      title => {
        this.pageTitle = title;
      }
    );
    this.coverService.pageDetails$.subscribe(
      details => {
        this.pageDetails = details;
      }
    );
  }

  ngOnChanges() {

  }
}
