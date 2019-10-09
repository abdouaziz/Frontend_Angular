import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';
import { Contact } from '../new-contact/model/model.contact';


@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any ;
  motCle:string="" ;
  currentPage:number=0 ;
  pages:Array<number> ;
  size:number=5 ;

  
  constructor(private http:Http , public contactservice:ContactsService , private router:Router ) { }

  ngOnInit() {
    
    
 
 
  }
  
  doSearch(){
    this.contactservice.getContacts( this.motCle ,this.currentPage ,this.size)
    .subscribe(data => {
      this.pageContacts=data  ;
      this.pages=new Array(data.totalPages) ;
    } , err=>{
      console.log(err) ;
    });
  }
  chercher(){
    this.doSearch() ;
  }
  
  gotoPage(i:number){
    this.currentPage= i ;
    this.doSearch() ;
  }

  onEditContact(id:number){
    this.router.navigate(['editContact',id]);
  }

  onDeleteContact(c:Contact){
    let confirm=window.confirm('Etes vours sure ?') ;
    if (confirm==true) {

      this.contactservice.deleteContact(c.id)
      .subscribe(data=>{
        this.pageContacts.content.splice(
          this.pageContacts.content.indexOf(c) ,1
        )
  
      },err=>{
        console.log(err) ;
  
      })

    }

   
  }
}
