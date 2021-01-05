import { Injectable } from '@angular/core'
import { Contact } from '../interfaces/contact'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  contacts: Contact[]

  constructor() {
    this.contacts = [
      {
        id: 1,
        name: 'Gregory',
        number: '96190210',
        tel: '1173631125',
        direction: 'Ramallo 2756',
        birthday: new Date().toDateString()
      },
      {
        id: 2,
        name: 'Ana',
        number: '68298267',
        tel: '1173631125',
        direction: 'Ramallo 2756',
        birthday: new Date().toDateString()
      },
      {
        id: 3,
        name: 'Anthony',
        number: '78265246',
        tel: '1173631125',
        direction: 'Ramallo 2756'
      }
    ]

    if (localStorage.getItem('contacts') === null) {
      localStorage.setItem('contacts', JSON.stringify(this.contacts))
    }
  }

  getAllContacts() {
    this.contacts = JSON.parse(localStorage.getItem('contacts'))
    // console.log('Get All Contacts', this.contacts)
    return this.contacts
  }

  getContact(id: number): Contact {
    const contact = this.contacts.filter(
      (currentContact) => currentContact.id === id
    )[0]
    // console.log('Get Contact', contact)
    return contact
  }

  createContact(contact: Contact): void {
    this.contacts.unshift(contact)
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
    // console.log('Create Contact', this.contacts)
  }

  updateContact(contact: Contact): void {
    this.contacts.map((currentContact, idx) => {
      if (currentContact.id === contact.id) {
        this.contacts.splice(idx, 1, contact)
      }
    })
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
    // console.log('Update Contact', this.contacts)
  }

  deleteContact(id: number): void {
    this.contacts.map((currentContact, idx) => {
      if (currentContact.id === id) {
        this.contacts.splice(idx, 1)
      }
    })
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
    // console.log('Delete Contact', this.contacts)
  }
}
