import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsComponent } from './contacts/contacts.component';
import { AddIssueComponent } from './addIssue/addIssue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




const appRoutes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'addIssue', component: AddIssueComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      TasklistComponent,
      AddtaskComponent,
      ContactsComponent,
      AddIssueComponent,
      SignUpComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      NgbModule,
      FormsModule,
      ReactiveFormsModule,
      NgBootstrapFormValidationModule,
      NgBootstrapFormValidationModule.forRoot(),
      FontAwesomeModule

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
