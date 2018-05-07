import { Component, OnInit } from '@angular/core';
import {CoverService} from '../../shared/services/cover.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  tab = 'skills';
  constructor(private coverService: CoverService) { }

  ngOnInit() {
    this.coverService.setHeight(500);
    this.coverService.setBackgroundUrl('/assets/images/the_world_wakes.jpg');
    this.coverService.setPageTitle('Player Profile');
    this.coverService.setPageDetails('look p player stats, drops and recent achievements');
  }

}
