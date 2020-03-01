import { Injectable } from '@angular/core';
// import {Jsonp} from '@angular/http';
import  {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

 @Injectable()

export class MultimediaService {

  private apikey:string="d0ceeb39d98b3bb0f563be6000610038";
  private urlMoviedb:string="https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  ObtenerCartelera(){
    let desde= new Date()
    let hasta= new Date()
    
    hasta.setDate(hasta.getDate()+7)
    let desdestr=`${desde.getFullYear()}-0${desde.getMonth()-1}-0${desde.getDate()}`
    let hastastr=`${hasta.getFullYear()}-0${hasta.getMonth()}-0${hasta.getDate() }`
  
    let url=`${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdestr}&primary_release_date.lte=${hastastr}&api_key=${this.apikey}&language=es`
    return this.http.get(url).pipe(
      map( res=> res.results))
  
  };

  ObtenerPeliculasPopulares(){

    let url=`${this.urlMoviedb}/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(
        map(res=>res.results))

  }; 

  BuscarPeli(busqueda:string){
    let url= `${this.urlMoviedb}/search/multi?api_key=${this.apikey}&language=es-US&query=${busqueda}&page=1&include_adult=false`;
    return this.http.get(url).pipe(
      map( resp=> resp.results))
  };

  obtenerPelicula(id:string){

    let url=`https://api.themoviedb.org/3/movie/${id}?api_key=d0ceeb39d98b3bb0f563be6000610038&language=es-US`;
    
    return this.http.get(url).pipe(
      map(resul=>resul))



    }
















};