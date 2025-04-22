import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoDetailsComponent } from './modules/projeto/projeto-details/projeto-details.component';
import { LoginComponent } from './modules/login/login.component';
import { ProjetoListComponent } from './modules/projeto/projeto-list/projeto-list.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: 'novo-projeto', component: ProjetoDetailsComponent},
  {path: 'projetos', component: ProjetoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
