import {FeedComponent} from './pages/feed/feed.component';
import {HomeComponent} from './pages/home/home.component';
import {PlayerComponent} from './pages/player/player.component';

export const routes = [
  { path: 'player', component: PlayerComponent},
  { path: 'home', component: HomeComponent},
  { path: 'feed', component: FeedComponent},
  { path: '**', redirectTo: 'home'},
];
