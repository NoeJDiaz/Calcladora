import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { BotonComponent } from './components/boton/boton.component';
import { DisplayComponent } from './components/display/display.component';
import { BotonclearComponent } from './components/botonclear/botonclear.component';
import { NgParticlesModule } from "ng-particles";

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    BotonComponent,
    DisplayComponent,
    BotonclearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
