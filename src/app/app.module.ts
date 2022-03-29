import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessageSpaceComponent } from './message-space/message-space.component';
import { TextareaToolComponent } from './textarea-tool/textarea-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageSpaceComponent,
    TextareaToolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
