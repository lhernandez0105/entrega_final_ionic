import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterDetailPageRoutingModule } from './character-detail-routing.module';

import { CharacterDetailPage } from './character-detail.page';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDetailPageRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [CharacterDetailPage],
  providers: [RickAndMortyService]

})
export class CharacterDetailPageModule {}
