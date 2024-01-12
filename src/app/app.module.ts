import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyformComponent } from './myforms/myform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { FormPreviewResolver } from './form-preview-resolver.service';
import { FormPreviewService } from './form-preview.service';

@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    FormPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    FormPreviewResolver,
    FormPreviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
