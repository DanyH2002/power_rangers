import { Routes } from '@angular/router';
import { HeaderComponent } from './partial/header/header.component';
import { LandingComponent } from './partial/landing/landing.component';
//USUARIOS
import { LoginComponent } from './user/login/login.component';
import { RegistroComponent } from './user/registro/registro.component';
//VISTAS
import { PeliculasComponent } from './vistas/pelicula/peliculas/peliculas.component';
import { PersonajesComponent } from './vistas/pelicula/personajes/personajes.component';
import { VillanosComponent } from './vistas/pelicula/villanos/villanos.component';
import { ArmasComponent } from './vistas/serie/armas/armas.component';
import { CrossoverComponent } from './vistas/serie/crossover/crossover.component';
import { EquipoComponent } from './vistas/serie/equipo/equipo.component';
import { MentorComponent } from './vistas/serie/mentor/mentor.component';
import { MorferComponent } from './vistas/serie/morfer/morfer.component';
import { MounstroComponent } from './vistas/serie/mounstro/mounstro.component';
import { PersecComponent } from './vistas/serie/persec/persec.component';
import { RangersComponent } from './vistas/serie/rangers/rangers.component';
import { TemporadaComponent } from './vistas/serie/temporada/temporada.component';
import { TransporteComponent } from './vistas/serie/transporte/transporte.component';
import { VillanComponent } from './vistas/serie/villan/villan.component';
import { ZordComponent } from './vistas/serie/zord/zord.component';
//FORMULARIOS
import { PeliculaComponent } from './form/pelicula/pelicula/pelicula.component';
import { VillainComponent } from './form/pelicula/villain/villain.component';
import { CharacterComponent } from './form/pelicula/character/character.component';
import { ArmaComponent } from './form/serie/arma/arma.component';
import { CrossoversComponent } from './form/serie/crossovers/crossovers.component';
import { MentorsComponent } from './form/serie/mentors/mentors.component';
import { MonsterComponent } from './form/serie/monster/monster.component';
import { MorfersComponent } from './form/serie/morfers/morfers.component';
import { RangerComponent } from './form/serie/ranger/ranger.component';
import { SeasonComponent } from './form/serie/season/season.component';
import { SecperComponent } from './form/serie/secper/secper.component';
import { TeamComponent } from './form/serie/team/team.component';
import { TransportComponent } from './form/serie/transport/transport.component';
import { VillanoComponent } from './form/serie/villano/villano.component';
import { ZordsComponent } from './form/serie/zords/zords.component';

export const routes: Routes = [
      {path: 'header', component: HeaderComponent},
      {path: 'landing', component: LandingComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroComponent},
      //Vistas
      {path: 'Peliculas', component: PeliculasComponent},
      {path: 'PersonajesDePelicula', component: PersonajesComponent},
      {path: 'VillanosDePelicula', component: VillanosComponent},
      {path: 'ArmaRanger', component: ArmasComponent },
      {path: 'Crossovers', component: CrossoverComponent},
      {path: 'Equipos', component: EquipoComponent},
      {path: 'Mentores', component: MentorComponent},
      {path: 'Morfer', component: MorferComponent},
      {path: 'Mounstros', component: MounstroComponent},
      {path: 'Aliados&PersonajesSecundarios', component: PersecComponent},
      {path: 'Rangers', component: RangersComponent},
      {path: 'Temporadas', component: TemporadaComponent},
      {path: 'Transporte', component: TransporteComponent},
      {path: 'Villanos', component: VillanComponent},
      {path: 'Zord&Megazord', component: ZordComponent},
      //Formularios
      {path: 'PeliculaForm', component: PeliculaComponent},
      {path: 'PersonajesDePeliculaForm', component: VillainComponent},
      {path: 'VillanosDePeliculaForm', component: CharacterComponent},
      {path: 'ArmaRangerForm', component: ArmaComponent},
      {path: 'CrossoversForm', component: CrossoversComponent},
      {path: 'MentoresForm', component: MentorsComponent},
      {path: 'MounstrosForm', component: MonsterComponent},
      {path: 'MorferForm', component: MorfersComponent},
      {path: 'RangersForm', component: RangerComponent},
      {path: 'TemporadasForm', component: SeasonComponent},
      {path: 'PersonajesSecundariosForm', component: SecperComponent},
      {path: 'EquiposForm', component: TeamComponent},
      {path: 'TransporteForm', component: TransportComponent},
      {path: 'VillanosForm', component: VillanoComponent},
      {path: 'Zord&MegazordForm', component: ZordsComponent},
      {path: '**', redirectTo: 'landing' }
];
