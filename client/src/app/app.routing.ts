import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './components/login.component'
import { RegisterComponent } from './components/register.component'
import { HomeComponent } from './components/home.component'
import { ButtonsComponent } from './components/buttons.components'
import { CardsComponent } from './components/cards.component'
import { ColorsComponent } from './components/colors.components'
import { BordersComponent } from './components/borders.components'
import { AnimationsComponent } from './components/animations.component'
import { OthersComponent } from './components/others.component'
import { NotFoundComponent } from './components/not-found.component'
import { BlankComponent } from './components/blank.component'
import { ChartsComponent } from './components/charts.component'
import { TablesComponent } from './components/tables.component'
import { UsersComponent } from './components/users.component'

const AppRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'borders', component: BordersComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'others', component: OthersComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'blank', component: BlankComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: NotFoundComponent }
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes)