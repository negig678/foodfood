import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DinnerComponent } from './dinner/dinner.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { MenuComponent } from './menu/menu.component';
import { LunchComponent } from './lunch/lunch.component';
import { AboutComponent } from './about/about.component';
import { Dinner1Component } from './dinner1/dinner1.component';
import { Dinner2Component } from './dinner2/dinner2.component';
import { Dinner3Component } from './dinner3/dinner3.component';
import { Dinner4Component } from './dinner4/dinner4.component';
import { Breakfast1Component } from './breakfast1/breakfast1.component';
import { Breakfast2Component } from './breakfast2/breakfast2.component';
import { Breakfast3Component } from './breakfast3/breakfast3.component';
import { Breakfast4Component } from './breakfast4/breakfast4.component';
import { Lunch1Component } from './lunch1/lunch1.component';
import { Lunch2Component } from './lunch2/lunch2.component';
import { Lunch3Component } from './lunch3/lunch3.component';
import { Lunch4Component } from './lunch4/lunch4.component';
import { ContactComponent } from './contact/contact.component';
import { ViewComponent } from './view/view.component';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { Login1Component } from './login1/login1.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DinnerComponent,
    BreakfastComponent,
    MenuComponent,
    LunchComponent,
    AboutComponent,
    Dinner1Component,
    Dinner2Component,
    Dinner3Component,
    Dinner4Component,
    Breakfast1Component,
    Breakfast2Component,
    Breakfast3Component,
    Breakfast4Component,
    Lunch1Component,
    Lunch2Component,
    Lunch3Component,
    Lunch4Component,
    ContactComponent,
    ViewComponent,
    Login1Component,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
