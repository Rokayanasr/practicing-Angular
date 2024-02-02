import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { ChildComponent } from './child/child.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './services/movies.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      AboutComponent,
      ContactsComponent,
      FooterComponent,
      ProductsComponent,
      NavbarComponent,
      NotfoundComponent,
      WebComponent,
      MobileComponent,
      ChildComponent,
      MoviesComponent,
      LoginComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  // if i put the service here so its for all the module
  providers: [UsersService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
