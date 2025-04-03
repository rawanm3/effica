import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comonents/home/home.component';
import { AboutComponent } from './comonents/about/about.component';
import { FooterComponent } from './comonents/footer/footer.component';
import { ContactUsComponent } from './comonents/contact-us/contact-us.component';
import { WorkComponent } from './comonents/work/work.component';
import { TestemonialsComponent } from './comonents/testemonials/testemonials.component';
import { ServicesComponent } from './comonents/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'about', component: AboutComponent }, // About page
  { path: 'services', component: ServicesComponent} ,
  { path: 'work', component:WorkComponent} ,
  { path: 'testmonials', component: TestemonialsComponent } ,
  // { path: 'contactUs', component: ContactUsComponent },
  { path: 'contactUs', component: FooterComponent }  ,
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
