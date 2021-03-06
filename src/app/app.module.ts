import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {PlayerUtilsModule} from './player-utils/player-utils.module';
import {PlayerRegistrationModule} from './player-registration/player-registration.module';
import {PlayerProfileModule} from './player-profile/player-profile.module';
import {SearchPlayerModule} from './search-player/search-player.module';
import {MatToolbarModule} from "@angular/material";
import {LoginModule} from "./login/login.module";
import {SearchRowModule} from "./search-row/search-row.module";
import {PlayerGraphModule} from "./player-graph/player-graph.module";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {ScouterRegistrationModule} from "./scouter-registration/scouter-registration.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlayerUtilsModule,
    PlayerRegistrationModule,
    PlayerProfileModule,
    SearchPlayerModule,
    MatToolbarModule,
    LoginModule,
    SearchRowModule,
    PlayerGraphModule,
    SharedModule,
    AppRoutingModule,
    DashboardModule,
    ScouterRegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
