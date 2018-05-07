import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SocketIoModule, SocketIoConfig} from 'ng-socket-io';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {routes} from './app.routing';
import {PingService} from './shared/services/ping.services';
import {HomeComponent} from './pages/home/home.component';
import {FeedComponent} from './pages/feed/feed.component';
import {ActivitiesComponent} from './pages/player/activities/activities.component';
import {StatsComponent} from './pages/player/stats/stats.component';
import {InfoComponent} from './pages/player/info/info.component';
import {PlayerComponent} from './pages/player/player.component';
import {CoverService} from './shared/services/cover.service';

const config: SocketIoConfig = {url: 'http://localhost:5400', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    InfoComponent,
    StatsComponent,
    ActivitiesComponent,
    FeedComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'nestJS'}),
    HttpClientModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
  ],
  providers: [
    PingService,
    CoverService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
