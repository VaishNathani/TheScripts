import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
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
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
import { ComingSoonComponent } from './ComingSoon.component';
import { JsWidgetsComponent } from './js-widgets/js-widgets.component';
import { AccordianComponent } from './accordian/accordian.component';
import { TooltipsComponent } from './tooltips/tooltips.component';


@NgModule({
  declarations: [
    AppComponent,
    Bs4TableComponent,
    Bs4GridComponent,
    Bs4CardsComponent,
    Bs4FormComponent,
    Bs4InlineFormComponent,
    Bs4FormValidationsComponent,
    Bs4FormInputgroupComponent,
    Bs4ListGroupsComponent,
    ErrorComponent,
    ComingSoonComponent,
    JsWidgetsComponent,
    AccordianComponent,
    TooltipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
