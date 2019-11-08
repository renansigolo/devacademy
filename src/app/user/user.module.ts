import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserRoutingModule } from './user-routing.module'
import { LoginPageComponent } from './login-page/login-page.component'
import { GoogleSigninDirective } from './google-signin.directive'
import { SharedModule } from 'app/shared/shared.module'
import { MatTabsModule } from '@angular/material/tabs'
import { MatProgressBarModule } from '@angular/material/progress-bar'

@NgModule({
  declarations: [LoginPageComponent, GoogleSigninDirective],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatTabsModule,
    MatProgressBarModule
  ]
})
export class UserModule {}
