import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { OrderModule } from './features/order/order.module';
import { HomeModule } from './features/home/home.module';
import { LayoutComponent } from './features/layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule, 
    OrderModule, 
    HomeModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
