import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {

  characterId: string = " ";
  character = null as any;
  episodes: any [] = [];

  constructor(
    private accRoute: ActivatedRoute,
    private rymSvc: RickAndMortyService
  ) {
    this.characterId = this.accRoute.snapshot.paramMap.get("id") as string;
    console.log(this.characterId)
  }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.getCharacters();
  }

  getCharacters() {
    this.rymSvc.getCharacterById(this.characterId).subscribe({
      next: (respuesta: any) => {
        this.character = respuesta;
        this.getEpisodes();
        console.log(this.episodes)
      }, error: (err: any) => { }
    });
  }

  getEpisodes() {
    for (let url of this.character.episode) {

      this.rymSvc.getByUrl(url).subscribe({
        next: (respuesta: any) => {
          this.episodes.push(respuesta);
  
        }, error: (err: any) => { }
      });

    }



  }

}
