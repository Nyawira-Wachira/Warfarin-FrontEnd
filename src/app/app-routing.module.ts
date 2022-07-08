import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { RegisterComponent } from './components/register/register.component';
import { LabFormComponent } from './components/lab-form/lab-form.component';
import { ReceptionFormComponent } from './components/reception-form/reception-form.component';
import { AdminComponent } from './admin/admin/admin.component';
import { NurseregisterComponent } from './admin/register/nurseregister/nurseregister.component';
// import { ReceptionComponentComponent } from './components/reception-component/reception-component.component';


const routes: Routes = [
{path:'', component: HomeComponent},
{path:'reception',component:ReceptionFormComponent},
{path:'register', component: RegisterComponent},
{path:'login', component: LoginComponent},
{path:'nurse', component: NurseComponent},
{path:'lab', component: LabFormComponent},
{path: 'admin', component: AdminComponent, 
children:[
  {
    path:'register/nurseregister',
    component: NurseregisterComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
