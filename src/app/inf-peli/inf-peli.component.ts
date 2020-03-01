import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {MultimediaService} from '../../Service/Multimedia.service';


@Component({
  selector: 'app-inf-peli',
  templateUrl: './inf-peli.component.html',
  styleUrls: ['./inf-peli.component.css']
})
export class InfPeliComponent implements OnInit {

  peli:any

  constructor( private multimediaservice:MultimediaService,
               private A_router:ActivatedRoute,
               private route:Router) {

                this.A_router.params.subscribe(res=>{
                  this.pelicula(res.id)
                })

               }


  ngOnInit() {
  }

  pelicula(id:string){

    this.multimediaservice.obtenerPelicula(id).subscribe(      
      res=>{this.peli=res
      console.log(this.peli)
      }
    )
  }

  regresar(){
    this.route.navigate(['/home'])
  }

}