import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NgCalendarModule } from 'ionic2-calendar';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { EventProvider } from '../providers/event/event';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    EventProvider    
  ]
})
export class AppModule {}
