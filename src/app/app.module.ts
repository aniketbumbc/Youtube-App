import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule}from '@angular/http';
import{FormsModule} from '@angular/forms';
import{youTubeSearchInjectables} from './you-tube-search.injectables';


import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
