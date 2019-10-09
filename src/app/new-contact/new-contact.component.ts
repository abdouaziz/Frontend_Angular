import { Component, OnInit } from '@angular/core';
import {  Contact } from './model/model.contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  mode:number=1 ;
  contact:Contact=new Contact()  ;
  constructor(public contactsService:ContactsService) { 

  }

  ngOnInit() {
  }

  saveContact(){
    this.contactsService.save(this.contact)
    .subscribe(data=>{
      this.contact=data ;
     this.mode=2;
    } ,
    err=>{
      console.log(err) 
    })

  }
}
