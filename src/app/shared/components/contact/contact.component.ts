import { Component, OnInit, Input } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'

import { Contact } from '../../interfaces/contact'
import { DialogComponent } from '../dialog/dialog.component'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() actions: boolean = true
  @Input() contact: Contact
  visibility: boolean = false
  subscription: Subscription

  constructor(private matDialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  changeVisibility() {
    this.visibility = !this.visibility
  }

  openDialog() {
    this.matDialog.open(DialogComponent, {
      data: this.contact
    })
  }
}
