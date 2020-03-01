import { Component, OnInit } from '@angular/core';
import {MultimediaService} from '../../Service/Multimedia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  Cartelera:any
  Populares:any

  constructor( private servicemultimedia:MultimediaService) { 

        this.servicemultimedia.ObtenerCartelera().subscribe(
          res=> {
            this.Cartelera=res
            console.log("REspuesta obtenida1: ",this.Cartelera)}
        )

        this.servicemultimedia.ObtenerPeliculasPopulares().subscribe(
            resp=>{
                this.Populares=resp
                console.log("REspuesta obtenida2: ",this.Populares)
            })
}

  ngOnInit() {
  }



}