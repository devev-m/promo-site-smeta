import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiButtonModule } from './ui-components/ui-button/ui-button.module';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { InnovationComponent } from './sections/main/innovation/innovation.component';
import { PricesComponent } from './sections/main/prices/prices.component';
import { TryComponent } from './sections/main/try/try.component';
import { FeedbackComponent } from './sections/main/feedback/feedback.component';
import { RegistrationComponent } from './sections/main/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InnovationComponent,
    PricesComponent,
    TryComponent,
    FeedbackComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UiButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
