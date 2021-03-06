import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Servicios
import { CrearPqrsService } from './services/crear-pqrs.service';
import { RegistrarPqrsService } from './services/registrar-pqrs.service';

//Rutas
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { SeguimientoComponent } from './seguimiento/seguimiento/seguimiento.component';
import { CrearpqrsComponent } from './seguimiento/crearpqrs/crearpqrs.component';
import { CrearinteraccionComponent } from './seguimiento/crearinteraccion/crearinteraccion.component';
import { RegistrarpqrsComponent } from './seguimiento/registrarpqrs/registrarpqrs.component';
import { RegistrarinteraccionComponent } from './seguimiento/registrarinteraccion/registrarinteraccion.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [
    CrearPqrsService,
    RegistrarPqrsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
