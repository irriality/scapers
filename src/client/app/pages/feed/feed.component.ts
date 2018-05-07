import { Component, OnInit } from '@angular/core';
import {CoverService} from '../../shared/services/cover.service';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  playerFeed: any[] = [
    {img: this.sanitization.bypassSecurityTrustUrl('https://images-ext-2.discordapp.net/external/sSpJUfjmVHvB-hCiirHH99Mz5aPlk6OMpX5l7xTg-os/%3Ftimestamp%3D1519836186868/https/secure.runescape.com/m%3Davatar-rs/%27sync/chat.png?width=100&height=100'), name: 'Sync', details: 'achieved 120 thieving', date: 'Today @ 10:30 PM'},
    {img: this.sanitization.bypassSecurityTrustUrl('https://images-ext-2.discordapp.net/external/cKHZ911QRNIg6kFIHEEveJVzEBESkcHe_jiYbB5pQlQ/%3Ftimestamp%3D1520620372593/https/secure.runescape.com/m%3Davatar-rs/%27dubsi/chat.png?width=100&height=100'), name: 'Dubsi', details: 'got some pernix chaps', date: 'Today @ 10:30 PM'},
    {img: this.sanitization.bypassSecurityTrustUrl('https://images-ext-2.discordapp.net/external/T-sQao0E7p9_TTPy8siOHiKSQ-u4RBwyYdD5_ZTOVts/%3Ftimestamp%3D1520620380616/https/secure.runescape.com/m%3Davatar-rs/%27adam3/chat.png?width=100&height=100'), name: 'Adam3', details: 'died at telos', date: 'Today @ 10:30 PM'},
    {img: this.sanitization.bypassSecurityTrustUrl('https://images-ext-2.discordapp.net/external/sSpJUfjmVHvB-hCiirHH99Mz5aPlk6OMpX5l7xTg-os/%3Ftimestamp%3D1519836186868/https/secure.runescape.com/m%3Davatar-rs/%27sync/chat.png?width=100&height=100'), name: 'Sync', details: 'got a dormant staff of sliske', date: 'Today @ 10:30 PM'},
    {img: this.sanitization.bypassSecurityTrustUrl('https://images-ext-1.discordapp.net/external/bkBxRXaukHMd-oYlzc8HBw3wglCQQNjMJeX9e6uk7bk/%3Ftimestamp%3D1520620383402/https/secure.runescape.com/m%3Davatar-rs/%27fanclub/chat.png?width=100&height=100'), name: 'Fanclub', details: 'did not get the vindy pet', date: 'Today @ 10:30 PM'},
  ];
  constructor(private coverService: CoverService,
              private sanitization: DomSanitizer) { }

  ngOnInit() {
    this.coverService.setHeight(500);
    this.coverService.setBackgroundUrl('/assets/images/the_arc.jpg');
    this.coverService.setPageTitle('Activity Feed');
    this.coverService.setPageDetails(`activity of the RuneScape3 players and clans to whom you're subscribed`);
  }

}
