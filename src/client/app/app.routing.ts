import {HomeComponent} from './pages/home/home.component';
import {ChartsComponent} from './pages/charts/charts.component';

export const routes = [
  { path: 'home', component: HomeComponent},
  { path: 'charts', component: ChartsComponent},
  { path: '**', redirectTo: 'home'},
];
