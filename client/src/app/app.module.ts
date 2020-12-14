import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component'
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OthersComponent,
    NotFoundComponent,
    BlankComponent,
    ChartsComponent,
    TablesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }