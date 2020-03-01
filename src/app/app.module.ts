import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{RoutingModule} from './routering.module';

// import {JsonpModule, Jsonp, Response} from '@angular/http';
// JsonpModule

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { nadvarCompoment } from './shared/nadvar/nadvar.component';
import { InfPeliComponent } from './inf-peli/inf-peli.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './home/galeria.component';

import {MultimediaService} from '../Service/Multimedia.service'

import {DomSeguroPipe} from '../Pipe/Pipeseguro.pipe'

@NgModule({
  imports:      [ BrowserModule, FormsModule,RoutingModule,HttpClientModule ],
  declarations: [ AppComponent,nadvarCompoment, InfPeliComponent, BusquedaComponent,HomeComponent,DomSeguroPipe,GaleriaComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [MultimediaService]
})
export class AppModule { }
