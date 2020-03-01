import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'galeria-home',
  templateUrl: './galeria.component.html'
})

export class GaleriaComponent implements OnInit {


@Input() galeria:any;
@Input() Titulo:string


  constructor( ) { }


  ngOnInit() {
  }



}