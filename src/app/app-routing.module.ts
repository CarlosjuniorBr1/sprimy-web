import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoDetailsComponent } from './modules/projeto/projeto-details/projeto-details.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: 'novo-projeto', component: ProjetoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
