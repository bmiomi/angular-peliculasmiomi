import { NgModule } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BusquedaComponent} from './busqueda/busqueda.component';
import {InfPeliComponent} from './inf-peli/inf-peli.component';

export const router:Routes=[  
  {path:'home',component:HomeComponent},
  {path:'busqueda',component:BusquedaComponent},
  {path:'busqueda/:texto',component:BusquedaComponent},
  {path:'info/:id',component:InfPeliComponent},
  {path:'**',pathMatch:'full',  redirectTo:'home'}
]
@NgModule({
  imports:[RouterModule.forRoot(router)],
  exports:[
    RouterModule
  ]
})
export class RoutingModule{



  

}