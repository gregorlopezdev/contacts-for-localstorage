import { Component, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Contact } from 'src/app/shared/interfaces/contact'
import { CrudService } from 'src/app/shared/services/crud.service'

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss']
})
export class NewcontactComponent implements OnInit {
  // @ViewChild('picker') picker
  contactForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  private generateRandomId(): number {
    return Math.floor(Math.random() * (1000 - 0 + 1) + 0)
  }

  private initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      tel: ['', Validators.required],
      direction: ['', Validators.required],
      birthday: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('valid')
      const birthday = this.contactForm.value.birthday.toDateString()

      const contact: Contact = {
        id: this.generateRandomId(),
        name: this.contactForm.value.name,
        number: this.contactForm.value.number,
        tel: this.contactForm.value.tel,
        direction: this.contactForm.value.direction,
        birthday: birthday || ''
      }
      this.crudService.createContact(contact)
      this.router.navigate(['/contacts'])
    } else {
      console.log('not valid')
    }
  }
}
