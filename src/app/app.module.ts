import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductApiService } from './products/api/product-api.service';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';


registerLocaleData(localePt, 'pt');


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
  ],
  providers: [
    ProductApiService,
    {
      provide: LOCALE_ID,
      useValue: 'pt'
  },
  {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
