import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindComponent } from './bind/bind.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'bind', component: BindComponent},
  {path:'parent', component: ParentComponent},
  {path:'**', component: BindComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
