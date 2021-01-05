import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MaterialModule } from '../modules/material/material.module'
import { NavbarComponent } from './navbar/navbar.component'
import { ContactComponent } from './contact/contact.component'
import { DialogComponent } from './dialog/dialog.component'

@NgModule({
  declarations: [NavbarComponent, ContactComponent, DialogComponent],
  entryComponents: [DialogComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [NavbarComponent, ContactComponent, DialogComponent]
})
export class ComponentsModule {}
