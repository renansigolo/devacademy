import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { CourseDetailsComponent } from '@pages/course-details/course-details.component'
import { CoursesComponent } from '@pages/courses/courses.component'
import { HomeComponent } from '@pages/home/home.component'
import { SharedModule } from '@shared/shared.module'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PartnersComponent } from './components/partners/partners.component'
import { AwardsComponent } from './components/web/awards/awards.component'
import { GetNotifiedComponent } from './components/web/get-notified/get-notified.component'
import { LocationComponent } from './components/web/location/location.component'
import { NewsletterComponent } from './components/web/newsletter/newsletter.component'
import { YoutubeComponent } from './components/web/youtube/youtube.component'
import { SignupComponent } from './modals/signup/signup.component'
import { HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    CoursesComponent,
    CourseDetailsComponent,
    NewsletterComponent,
    YoutubeComponent,
    AwardsComponent,
    LocationComponent,
    GetNotifiedComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    HttpClientModule,
    SharedModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  entryComponents: [SignupComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [GetNotifiedComponent]
})
export class AppModule {}
