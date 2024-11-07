import { Routes } from '@angular/router';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CreaeditaserviciosComponent } from './components/servicios/creaeditaservicios/creaeditaservicios.component';
import { CentrosmedicosComponent } from './components/centrosmedicos/centrosmedicos.component';
import { CreaeditacentrosComponent } from './components/centrosmedicos/creaeditacentros/creaeditacentros.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CreaeditausuariosComponent } from './components/usuarios/creaeditausuarios/creaeditausuarios.component';
import { PromediocentrosqueryComponent } from './components/centrosmedicos/promediocentrosquery/promediocentrosquery.component';
import { EscuelasComponent } from './components/escuelas/escuelas.component';
import { CreaeditaescuelasComponent } from './components/escuelas/creaeditaescuelas/creaeditaescuelas.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { CreaeditapromocionesComponent } from './components/promociones/creaeditapromociones/creaeditapromociones.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { CreaeditanotificacionesComponent } from './components/notificaciones/creaeditanotificaciones/creaeditanotificaciones.component';
import { RolesComponent } from './components/roles/roles.component';
import { CreaeditarolesComponent } from './components/roles/creaeditaroles/creaeditaroles.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { CreaeditacalendarioComponent } from './components/calendario/creaeditacalendario/creaeditacalendario.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { CreaeditareservasComponent } from './components/reservas/creaeditareservas/creaeditareservas.component';
import { GraficopromediosComponent } from './components/centrosmedicos/graficopromedios/graficopromedios.component';
import { PromedioescuelasqueryComponent } from './components/escuelas/promedioescuelasquery/promedioescuelasquery.component';
import { GraficopromediosescuelasComponent } from './components/escuelas/graficopromediosescuelas/graficopromediosescuelas.component';
import { ContadornotificacionesqueryComponent } from './components/notificaciones/contadornotificacionesquery/contadornotificacionesquery.component';
import { GraficacontadorqueryComponent } from './components/notificaciones/graficacontadorquery/graficacontadorquery.component';

export const routes: Routes = [
    {
        path: 'servicios',
        component: ServiciosComponent,
        children: [
            {
                path: 'nuevo',
                component: CreaeditaserviciosComponent,
            },
            {
                path: 'ediciones/:id',
                component: CreaeditaserviciosComponent,
            },
        ],
    },
    {
        path: 'centrosmedicos',
        component: CentrosmedicosComponent,
        children: [
            {
                path: 'nuevo',
                component: CreaeditacentrosComponent,
            },
            {
                path: 'ediciones/:id',
                component: CreaeditacentrosComponent,
            },
            {   
                path: 'queries', 
                component: PromediocentrosqueryComponent ,
            },
            {   
                path: 'graficoquery', 
                component: GraficopromediosComponent ,
            }
        ],
    },
    
    
    {
        path: 'usuarios',
        component: UsuariosComponent,
        children: [
            {
                path: 'nuevo',
                component: CreaeditausuariosComponent,
            },
            {
                path: 'ediciones/:id',
                component: CreaeditausuariosComponent,
            },
        ],
    },
    {
        path: 'escuelas',
        component: EscuelasComponent,
        children: [
            {
                path: 'nuevo',
                component: CreaeditaescuelasComponent,
            },
            {
                path: 'ediciones/:id',
                component: CreaeditaescuelasComponent,
            },
            {
                path: 'queries',
                component: PromedioescuelasqueryComponent,
            },
            {
                path: 'graficoquery',
                component: GraficopromediosescuelasComponent,
            },
        ],
    },
    {
        path: 'promociones',
        component: PromocionesComponent,
        children: [
            {
                path: 'nuevo',
                component: CreaeditapromocionesComponent,
            },
            {
                path: 'ediciones/:id',
                component: CreaeditapromocionesComponent,
            },
        ],
    },
    {
        path: 'notificaciones',
        component: NotificacionesComponent,
        children: [
            {
                path: 'nuevo',
                component: CreaeditanotificacionesComponent,
            },
            {
                path: 'ediciones/:id',
                component: CreaeditanotificacionesComponent,
            },
            {
                path: 'queries',
                component: ContadornotificacionesqueryComponent,
            },
            {
                path: 'graficoquery',
                component: GraficacontadorqueryComponent,
            },
        ],
    },
    {
        path: 'roles',
        component: RolesComponent,
        children: [
            {
                path: 'nuevo',
                component: CreaeditarolesComponent,
            },
            {
                path: 'ediciones/:id',
                component: CreaeditarolesComponent,
            },
        ],
    },
    {
        path: 'calendario',
        component: CalendarioComponent,
        children: [
            {
                path: 'nuevo',
                component: CreaeditacalendarioComponent,
            },
            {
                path: 'ediciones/:id',
                component: CreaeditacalendarioComponent,
            },
        ],
    },
    {
        path: 'reservas',
        component: ReservasComponent,
        children: [
            {
                path: 'nuevo',
                component: CreaeditareservasComponent,
            },
            {
                path: 'ediciones/:id',
                component: CreaeditareservasComponent,
            },
        ],
    }

];
