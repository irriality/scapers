import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  stats: any[] = [];
  constructor() { }

  ngOnInit() {
    this.stats = [
      {"id": 0, "name":"Overall", "level": 2736, "rank": 999999, "xp":540000000, "today": 1000000, "yesterday":10000000},
      {"id": 0, "name":"Attack", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 1, "name": "Defence", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 2, "name": "Strength", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 3, "name": "Hitpoints", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 4, "name": "Ranged", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 5, "name": "Prayer", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 6, "name": "Magic", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 7, "name": "Cooking", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 8, "name": "Woodcutting", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 9, "name": "Fletching", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 10, "name": "Fishing", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 11, "name": "Firemaking", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 12, "name": "Crafting", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 13, "name": "Smithing", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 14, "name": "Mining", "level": 99, "rank": 999999, "xp":5400000, "today": 1000000, "yesterday":10000000},
      {"id": 15, "name": "Herblore", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 16, "name": "Agility", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 17, "name": "Thieving", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 18, "name": "Slayer", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 19, "name": "Farming", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 20, "name": "Runecrafting", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 21, "name": "Hunter", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 22, "name": "Construction", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 23, "name": "Summoning", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 24, "name": "Dungeoneering", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 25, "name": "Divination", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
      {"id": 26, "name": "Invention", "level": 99, "rank": 999999, "xp":54000000, "today": 1000000, "yesterday":10000000},
    ]
  }

}
