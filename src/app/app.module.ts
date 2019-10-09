import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Routes, RouterModule } from '@angular/router';
import{Http, HttpModule} from '@angular/http'
import { ContactsService } from './services/contacts.service';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component'
import { EditContactComponent } from './edit-contact/edit-contact.component';

const appRoutes:Routes=[
{path:'about' ,component:AboutComponent} ,
{path:'contacts' ,component:ContactsComponent} ,
{path:'new-contact' ,component:NewContactComponent} ,
{path:'' , redirectTo:'/about' ,pathMatch:'full'} ,
{path:'editContact/:id' ,component:EditContactComponent}
] ;

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,RouterModule.forRoot(appRoutes)  ,
    HttpModule ,
    FormsModule
  
  
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
