// Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from 'src/app/app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/users/add-user.component';
import { EditUserComponent } from './components/users/edit-user.component';
import { FooterComponent } from './components/footer/footer.component';

// Pipe
import { MyPipe } from './pipes/mypipe';

// Directive
import { FooterDirective } from './directives/footer.directive';
import { GuardService } from './guard.service';
import { NotFoundComponent } from './components/not-found.component';

@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutes
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    SideMenuComponent,
    FooterComponent,
    NotFoundComponent,
    MyPipe,
    FooterDirective
  ],
  providers: [GuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
