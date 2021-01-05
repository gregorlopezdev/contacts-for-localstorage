import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HomeComponent } from './home.component'
import { MaterialModule } from 'src/app/shared/modules/material/material.module'
import { ComponentsModule } from 'src/app/shared/components/components.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule, MaterialModule, ComponentsModule],
  exports: [HomeComponent]
})
export class HomeModule {}
