import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { ContactsComponent } from './pages/contacts/contacts.component'
import { NewcontactComponent } from './pages/newcontact/newcontact.component'
import { UpdatecontactComponent } from './pages/updatecontact/updatecontact.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'newcontact',
    component: NewcontactComponent
  },
  {
    path: 'updatecontact/:id',
    component: UpdatecontactComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
