import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SocketIoModule, SocketIoConfig} from 'ng-socket-io';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import {AppComponent} from './app.component';
import {routes} from './app.routing';
import {PingService} from './shared/services/ping.services';
import {HomeComponent} from './pages/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';

const config: SocketIoConfig = {url: 'http://localhost:5400', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ChartsComponent,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'nestJS'}),
    BrowserAnimationsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    Ng2Charts,
  ],
  providers: [
    PingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
