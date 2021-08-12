import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from '../header/header.module';
import { SideMenuModule } from '../side-menu/side-menu.module';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { IntroComponent } from './intro/intro.component';
import { TranslateModule } from '@ngx-translate/core';
import { IntersectionObserverModule, TypewriterModule } from '@re-wo-dev/ui';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ServicesComponent, IntroComponent, ContactComponent],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    PagesRoutingModule,
    HeaderModule,
    TypewriterModule,
    SideMenuModule,
    TranslateModule,
    IntersectionObserverModule
  ]
})
export class PagesModule {}
