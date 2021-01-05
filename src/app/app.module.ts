import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'

import { ComponentsModule } from './shared/components/components.module'
import { HomeModule } from './pages/home/home.module'
import { ContactsModule } from './pages/contacts/contacts.module'
import { NewcontactModule } from './pages/newcontact/newcontact.module'
import { UpdatecontactModule } from './pages/updatecontact/updatecontact.module'

import { CrudService } from './shared/services/crud.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    HomeModule,
    ContactsModule,
    NewcontactModule,
    UpdatecontactModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule {}
