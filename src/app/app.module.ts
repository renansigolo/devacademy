import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { environment } from '@environments/environment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// App Modules
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { HomePageComponent } from './home-page/home-page.component'
import { SharedModule } from './shared/shared.module'
import { HttpClientModule } from '@angular/common/http'
import { ServiceWorkerModule } from '@angular/service-worker'

// Firebase imports
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
