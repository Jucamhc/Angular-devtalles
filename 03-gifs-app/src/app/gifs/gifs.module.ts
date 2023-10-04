import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '../shared/shared.module'

import { CardListComponent } from './components/card-list/card-list.component'
import { gifsCardComponent } from './components/gifs-card/gifs-card.components'
import { GifsSearchBoxComponent } from './components/search-box/search-box.component'
import { HomePageComponent } from './pages/home/home-page.component'


@NgModule({
  declarations: [
    CardListComponent,
    gifsCardComponent,
    GifsSearchBoxComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
