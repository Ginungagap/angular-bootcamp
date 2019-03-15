import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header/header.module';
import { HeaderService} from './shared/services/header.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth/services/auth.service';
import {CoreModule} from './core/core.module';
import {SpinnerInterceptor} from './core/interceptors/spinner.interceptor';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    CoreModule,
    MatProgressSpinnerModule
  ],
  providers: [
    HeaderService,
    // AuthService
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
