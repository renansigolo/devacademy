import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatTabsModule } from '@angular/material/tabs'
import { SharedModule } from 'app/shared/shared.module'
import { EmailLoginComponent } from './email-login/email-login.component'
import { GoogleSigninDirective } from './google-signin.directive'
import { LoginPageComponent } from './login-page/login-page.component'
import { UserRoutingModule } from './user-routing.module'

@NgModule({
  declarations: [
    LoginPageComponent,
    EmailLoginComponent,
    GoogleSigninDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatTabsModule,
    MatProgressBarModule
  ]
})
export class UserModule {}
