import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { UpdatecontactComponent } from './updatecontact.component'
import { MaterialModule } from 'src/app/shared/modules/material/material.module'

@NgModule({
  declarations: [UpdatecontactComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
  exports: [UpdatecontactComponent]
})
export class UpdatecontactModule {}
