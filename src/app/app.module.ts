import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth';

import { TruncateModule } from '@yellowspot/ng-truncate';


export const firebaseConfig = {
  apiKey: "AIzaSyDQ9Op2H6K1S4JnoprPQA9Wz3ibm8iDlpo",
  authDomain: "smothies-app.firebaseapp.com",
  databaseURL: "https://smothies-app.firebaseio.com",
  projectId: "smothies-app",
  storageBucket: "smothies-app.appspot.com",
  messagingSenderId: "6946019713",
  appId: "1:6946019713:web:2cd576d27ef19e5b"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    AngularFirestoreModule,
    TruncateModule
    
    // AngularFireAuthModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireDatabase,
    // AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
