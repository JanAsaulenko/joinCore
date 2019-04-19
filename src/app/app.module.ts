import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminModule} from './admin/admin.module';
import {AngularFireModule} from 'angularfire2';
import {config} from './firebase-config';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatInputModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    BrowserAnimationsModule,

  ],
  exports: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
