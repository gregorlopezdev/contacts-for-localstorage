import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { NewcontactComponent } from './newcontact.component'
import { MaterialModule } from 'src/app/shared/modules/material/material.module'

@NgModule({
  declarations: [NewcontactComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
  exports: [NewcontactComponent]
})
export class NewcontactModule {}
