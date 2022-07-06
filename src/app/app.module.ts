import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { FormsModule } from '@angular/forms';
import { ReceptionComponentComponent } from './components/reception-component/reception-component.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';
import { ReceptionFormComponent } from './components/reception-form/reception-form.component';
import { LabFormComponent } from './components/lab-form/lab-form.component';
import { LabComponentComponent } from './components/lab-component/lab-component.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NurseComponent,
    ReceptionComponentComponent,
    DateCountPipe,
    StrikethroughDirective,
    ReceptionFormComponent,
    LabFormComponent,
    LabComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
