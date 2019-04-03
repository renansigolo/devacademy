import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutModule } from '@angular/cdk/layout'
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule
} from '@angular/material'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class SharedModule {}
