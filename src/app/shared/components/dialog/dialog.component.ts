import { Component, Input, OnInit, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

import { Contact } from '../../interfaces/contact'
import { CrudService } from '../../services/crud.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor(
    private crudService: CrudService,
    @Inject(MAT_DIALOG_DATA) public contact: Contact
  ) {}

  ngOnInit(): void {}

  deleteContact() {
    this.crudService.deleteContact(this.contact.id)
  }
}
