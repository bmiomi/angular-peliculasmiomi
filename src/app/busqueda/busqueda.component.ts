import { Component, OnInit,Input } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import {MultimediaService} from '../../Service/Multimedia.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent implements OnInit {
  
  cargando:boolean=false;
  peliculas:any;

    constructor( 
                 private route:Router,
                 private activatedRoute:ActivatedRoute,
                 private serviciomultimedia:MultimediaService) {

                 this.activatedRoute.params.subscribe(res=>{

                      if(Object.keys(res).length === 0){
                          this.cargando=false
                          return;
                        }else{
                          this.buscar(res.texto)
                        }
                   })
                
                }

  ngOnInit() {
  }

  buscar(valor:string){

      if (valor.length==0){
        return;      
      }else{
      this.serviciomultimedia.BuscarPeli(valor).subscribe(
        (resp:any)=>{
                  console.log(resp)
          this.peliculas=resp });
      }
  
  }


  redirecionar(id:string){
    return this.route.navigate(['/info',id])
  }

}
