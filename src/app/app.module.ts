import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptionComponentComponent } from './components/reception-component/reception-component.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';
import { ReceptionFormComponent } from './components/reception-form/reception-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ReceptionComponentComponent,
    DateCountPipe,
    StrikethroughDirective,
    ReceptionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
