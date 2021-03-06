import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LalndingPageComponent } from './lalnding-page/lalnding-page.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LalndingPageComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
