import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IoservicesComponent } from './ioservices/ioservices.component';
import { IobannerComponent } from './iobanner/iobanner.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceLinePipe } from './service-line.pipe';
import { ConsultationComponent } from './consultation/consultation.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    IoservicesComponent,
    IobannerComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    ServiceListComponent,
    ServiceLinePipe,
    ConsultationComponent,
    NewsletterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
