import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './comonents/home/home.component';
import { AboutComponent } from './comonents/about/about.component';
import { NavbarComponent } from './comonents/navbar/navbar.component';
import { ServicesComponent } from './comonents/services/services.component';
import { ContactUsComponent } from './comonents/contact-us/contact-us.component';
import { WorkComponent } from './comonents/work/work.component';
import { TestemonialsComponent } from './comonents/testemonials/testemonials.component';
import { FooterComponent } from './comonents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // ComponentsComponent,
    // ServicesComponent,
    ContactUsComponent,
    NavbarComponent,
    // WorkComponent,
    // TestemonialsComponent,
    FooterComponent
  ],
  imports: [
    ServicesComponent,
    AboutComponent,
    HomeComponent,
    WorkComponent,
    TestemonialsComponent,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
