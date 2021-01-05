import { Component, OnInit } from '@angular/core'

import { Contact } from 'src/app/shared/interfaces/contact'
import { CrudService } from 'src/app/shared/services/crud.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contacts: Contact[]
  contactsBirthday: Contact[]
  showAllContactsState: boolean = false
  allContactsNumber: number = 0
  showAllContactsBirthdayState: boolean = false
  allContactsBirthdayNumber: number = 0

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.contacts = this.getAllContacts()
    this.contactsBirthday = this.getAllContactsBirthday()
    this.allContactsNumber = this.getAllContactsNumber()
    this.allContactsBirthdayNumber = this.getAllContactsBirthdayNumber()
  }

  private getAllContacts(): Contact[] {
    return this.crudService.getAllContacts()
  }

  private getAllContactsBirthday(): Contact[] {
    return this.contacts.filter(
      (contact) => contact.birthday === new Date().toDateString()
    )
  }

  private getAllContactsNumber(): number {
    return this.contacts.length
  }

  private getAllContactsBirthdayNumber(): number {
    return this.contactsBirthday.length
  }

  showAllContacts() {
    this.showAllContactsState = !this.showAllContactsState
  }

  showAllContactsBirthday() {
    this.showAllContactsBirthdayState = !this.showAllContactsBirthdayState
  }
}
