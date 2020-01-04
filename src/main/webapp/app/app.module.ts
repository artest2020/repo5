import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Repo5SharedModule } from 'app/shared/shared.module';
import { Repo5CoreModule } from 'app/core/core.module';
import { Repo5AppRoutingModule } from './app-routing.module';
import { Repo5HomeModule } from './home/home.module';
import { Repo5EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Repo5SharedModule,
    Repo5CoreModule,
    Repo5HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Repo5EntityModule,
    Repo5AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Repo5AppModule {}
