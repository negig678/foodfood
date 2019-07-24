import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinnerComponent } from './dinner/dinner.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
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
import { Login1Component } from './login1/login1.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
{path:"dinner",component:DinnerComponent},
{path:"breakfast",component:BreakfastComponent},
{path:"menu",component:MenuComponent},
{path:"lunch",component:LunchComponent},
{path:"about",component:AboutComponent},
{path:"dinner1",component:Dinner1Component},
{path:"dinner2",component:Dinner2Component},
{path:"dinner3",component:Dinner3Component},
{path:"dinner4",component:Dinner4Component},
{path:"breakfast1",component:Breakfast1Component},
{path:"breakfast2",component:Breakfast2Component},
{path:"breakfast3",component:Breakfast3Component},
{path:"breakfast4",component:Breakfast4Component},
{path:"lunch1",component:Lunch1Component},
{path:"lunch2",component:Lunch2Component},
{path:"lunch3",component:Lunch3Component},
{path:"lunch4",component:Lunch4Component},
{path:"contact",component:ContactComponent},
{path:"view",component:ViewComponent},
{path:"login1",component:Login1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
