import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouteComponent} from './route/route.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: 'route', component: RouteComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
