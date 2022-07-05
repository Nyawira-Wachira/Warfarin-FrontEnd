import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceptionComponentComponent } from './components/reception-component/reception-component.component';

const routes: Routes = [
  {
    path:'',component:ReceptionComponentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
