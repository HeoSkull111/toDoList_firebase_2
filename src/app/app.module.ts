import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ToDoReducer } from 'src/reducers/note.reducer';
import { ToDoEffect } from 'src/effects/note.effect';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDoService } from './services/note.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      toDo: ToDoReducer,
    }, {}),
    EffectsModule.forRoot([
      ToDoEffect
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    CommonModule,
    FormsModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService, ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
