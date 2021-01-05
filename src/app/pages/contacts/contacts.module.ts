import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ContactsComponent } from './contacts.component'
import { MaterialModule } from 'src/app/shared/modules/material/material.module'
import { ComponentsModule } from 'src/app/shared/components/components.module'

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, RouterModule, MaterialModule, ComponentsModule],
  exports: [ContactsComponent]
})
export class ContactsModule {}
