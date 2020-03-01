import  {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector:'nadvar-app',
  templateUrl: './nadvar.component.html'
})

export class nadvarCompoment{


constructor( private route:Router){
  }

enviar(texto:string){ 
  console.log(texto)
  return this.route.navigate(['/busqueda',texto])
}

}


