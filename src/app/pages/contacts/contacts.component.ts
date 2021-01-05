import { Component, OnInit } from '@angular/core'

import { Contact } from 'src/app/shared/interfaces/contact'
import { CrudService } from 'src/app/shared/services/crud.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[]

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.contacts = this.crudService.getAllContacts()
  }
}
