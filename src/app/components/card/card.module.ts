import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CardComponent
  ],
  providers: [],
  bootstrap: [CardComponent]
})
export class CardModule { }
