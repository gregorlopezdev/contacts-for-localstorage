import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'

import { Contact } from 'src/app/shared/interfaces/contact'
import { CrudService } from 'src/app/shared/services/crud.service'

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.scss']
})
export class UpdatecontactComponent implements OnInit {
  contactForm: FormGroup
  contact: Contact

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getContact()
  }

  private initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: [this.contact.name, Validators.required],
      number: [this.contact.number, Validators.required],
      tel: [this.contact.tel, Validators.required],
      direction: [this.contact.direction, Validators.required],
      birthday: [this.contact.birthday || '', Validators.required]
    })
  }

  private getContact() {
    const id = this.route.snapshot.paramMap.get('id')
    this.contact = this.crudService.getContact(parseInt(id))
    this.initForm()
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('valid')
      const birthday = this.contactForm.value.birthday.toDateString()

      const contact: Contact = {
        id: this.contact.id,
        name: this.contactForm.value.name,
        number: this.contactForm.value.number,
        tel: this.contactForm.value.tel,
        direction: this.contactForm.value.direction,
        birthday: birthday || ''
      }
      this.crudService.updateContact(contact)
      this.router.navigate(['/contacts'])
    } else {
      console.log('not valid')
    }
  }
}
