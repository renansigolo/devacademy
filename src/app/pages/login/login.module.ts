import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login.component'
import { Routes, RouterModule } from '@angular/router'
import { SharedModule } from 'app/shared/shared.module'


const routes: Routes = [{ path: '', component: LoginComponent }]

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class LoginModule {}
