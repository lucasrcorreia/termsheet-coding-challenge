import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LetModule } from '@rx-angular/template/let';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealsComponent } from './pages/deals/deals.component';
import { HomeComponent } from './pages/home/home.component';
import { DialogDealComponent } from './shared/dialogs/dialog-deal/dialog-deal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    HomeComponent,
    DialogDealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LetModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
