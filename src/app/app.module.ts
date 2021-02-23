import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { MatCardModule } from '@angular/material/card';
import { FiveAndDimeOptionsComponent } from './pages/five-and-dime-options/five-and-dime-options.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { DpDatePickerModule } from 'ng2-date-picker';
import { FiveInchComponent } from './pages/sub-components/five-inch/five-inch.component';
import { CupFlavorComponent } from './pages/sub-components/cup-flavor/cup-flavor.component';
import { IcingOptionsComponent } from './pages/sub-components/icing-options/icing-options.component';
import { MessageComponent } from './pages/sub-components/message/message.component';
import { MemberInfoComponent } from './pages/sub-components/member-info/member-info.component';
import { DateTimeComponent } from './pages/sub-components/date-time/date-time.component';
import { DatePickerComponent } from './pages/sub-components/date-picker/date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TimePickerComponent } from './pages/sub-components/time-picker/time-picker.component';
import { MatTimepickerModule } from 'mat-timepicker';
import { MatIconModule } from '@angular/material/icon';
import { SubmitComponent } from './pages/sub-components/submit/submit.component';
import { MatButtonModule } from '@angular/material/button';
import { TenInchOptionsComponent } from './pages/ten-inch-options/ten-inch-options.component';
import { TenInchComponent } from './pages/sub-components/ten-inch/ten-inch.component';
import { SprinklesComponent } from './pages/sub-components/sprinkles/sprinkles.component';
import { CommentsComponent } from './pages/sub-components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    HomeComponent,
    NewOrderComponent,
    FiveAndDimeOptionsComponent,
    FiveInchComponent,
    CupFlavorComponent,
    IcingOptionsComponent,
    MessageComponent,
    MemberInfoComponent,
    DateTimeComponent,
    DatePickerComponent,
    TimePickerComponent,
    SubmitComponent,
    TenInchOptionsComponent,
    TenInchComponent,
    SprinklesComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(AppRoutes),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTimepickerModule,
    MatIconModule,
    MatButtonModule
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }