import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TaskComponent} from './task/task.component'; 

const routes: Routes = [

{path:'task',component:TaskComponent},
{path:'',    pathMatch: 'full', redirectTo:'/task'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
