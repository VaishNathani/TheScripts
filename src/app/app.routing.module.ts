import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Bs4TableComponent } from './bs4-table/bs4-table.component';
import { Bs4GridComponent } from './bs4-grid/bs4-grid.component';
import { Bs4CardsComponent } from './bs4-cards/bs4-cards.component';
import { Bs4FormComponent } from './bs4-form/bs4-form.component';
import { Bs4InlineFormComponent } from './bs4-inline-form/bs4-inline-form.component';
import { Bs4FormValidationsComponent } from './bs4-form-validations/bs4-form-validations.component';
import { Bs4FormInputgroupComponent } from './bs4-form-inputgroup/bs4-form-inputgroup.component';
import { Bs4ListGroupsComponent } from './bs4-list-groups/bs4-list-groups.component';
import { ErrorComponent } from './error.component';
import { ComingSoonComponent } from './ComingSoon.component';

const appRoutes: Routes = [
  { path: 'App', component:  Bs4CardsComponent },
  { path: 'Table',  component:  Bs4TableComponent},      
  { path: 'Form',   component:  Bs4FormComponent}, 
  { path: 'InlineForm',   component:  Bs4InlineFormComponent}, 
  { path: 'FormValidations',   component:  Bs4FormValidationsComponent},
  { path: 'FormInputGroup',   component:  Bs4FormInputgroupComponent},
  { path: 'Cards',   component:  Bs4CardsComponent},
  { path: 'Grid',   component:  ComingSoonComponent}, 
  { path: 'ListGroups',   component:  Bs4ListGroupsComponent},  
  { path: '',   redirectTo: '/Cards',  pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }