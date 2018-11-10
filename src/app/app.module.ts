import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';





//router module used for setting up the application level route.
import { RouterModule,Routes } from '@angular/router';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
    
      {path:'dashboard',component:DashboardComponent},
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'test',component:TestComponent},


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
