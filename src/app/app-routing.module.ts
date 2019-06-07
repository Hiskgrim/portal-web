import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"admin", component: AdminComponent    
  },
  {
    path:"student", component: StudentComponent    
  },
  {
    path:"home", component: HomeComponent    
  },
  {
    path:"", redirectTo:"/home", pathMatch: "full"
  },
  {
    path:"**", component: HomeComponent //No exista
  }  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
