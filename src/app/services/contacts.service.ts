import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Contact } from '../new-contact/model/model.contact';
 

@Injectable()

export class ContactsService{

    constructor(public http:Http){

    }
 getContacts(motCle:string ,page:number ,size:number){

      return this.http.get("http://localhost:8080/chercherContacts?mc="+motCle+"&size="+size+"&page="+page)
     
        .pipe(map(resp=>resp.json()))

    }

    getContact(id:number){

      return this.http.get("http://localhost:8080/contacts/"+id)
     
        .pipe(map(resp=>resp.json()))

    }

    save(contact:Contact){

      return this.http.post("http://localhost:8080/contacts",contact)
        .pipe(map(resp=>resp.json()))
 
    }

    updateContact(contact:Contact){

      return this.http.put("http://localhost:8080/contacts/"+contact.id,contact)
        .pipe(map(resp=>resp.json()))

    } 

    deleteContact(id:number){

      return this.http.delete("http://localhost:8080/contacts/"+id)
        .pipe(map(resp=>resp.json()))

    } 

}