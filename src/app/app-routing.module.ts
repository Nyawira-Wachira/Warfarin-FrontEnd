import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { RegisterComponent } from './components/register/register.component';
import { LabFormComponent } from './components/lab-form/lab-form.component';
import { AdminComponent } from './admin/admin/admin.component';
import { NurseregisterComponent } from './admin/register/nurseregister/nurseregister.component';
import { ReceptionComponentComponent } from './components/reception-component/reception-component.component';
import { ReceptionregisterComponent } from './admin/register/receptionregister/receptionregister.component';
import { LabtechregisterComponent } from './admin/register/labtechregister/labtechregister.component';
import { DoctorregisterComponent } from './admin/register/doctorregister/doctorregister.component';
import { DoctorComponent } from './components/doctor/doctor.component';



const routes: Routes = [
{path:'', component: HomeComponent},
{path:'register', component: RegisterComponent},
{path:'login', component: LoginComponent},
{path:'nurse', component: NurseComponent},
{path:'lab', component: LabFormComponent},
{path:'reception', component: ReceptionComponentComponent},
{path:'doctor', component: DoctorComponent},
{path: 'admin', component: AdminComponent, 
children:[
  {
    path:'register/receptionregister',
    component: ReceptionregisterComponent
  },
  {
    path:'register/nurseregister',
    component: NurseregisterComponent
  },
  {
    path:'register/labtechregister',
    component: LabtechregisterComponent
  },
  {
    path:'register/doctorregister',
    component: DoctorregisterComponent
  }
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
