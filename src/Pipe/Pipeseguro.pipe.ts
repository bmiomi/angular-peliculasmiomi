import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {
  
  constructor(private domSanitizer:DomSanitizer){}
  
  transform(Pelicula:any=''):any {

    let temp:string;
    let url='https://image.tmdb.org/t/p/w500';

    if (Pelicula.backdrop_path){
      temp=url+Pelicula.backdrop_path;
    }else{
      if(Pelicula.poster_path){
        temp=url+Pelicula.poster_path
      }

    }


    return temp
  // return this.domSanitizer.bypassSecurityTrustResourceUrl(temp) ;
      

  }

}