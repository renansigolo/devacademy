import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { NavbarComponent } from './navbar/navbar.component'
import { MatCardModule } from '@angular/material/card'
import { RouterModule } from '@angular/router'
import { FooterComponent } from './footer/footer.component'
import { GoogleSigninDirective } from './google-signin.directive'

const components = [NavbarComponent, FooterComponent, GoogleSigninDirective]

const modules = [
  CommonModule,
  RouterModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatCardModule
]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule {}
