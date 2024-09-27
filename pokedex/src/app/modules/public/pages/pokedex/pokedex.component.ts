import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent implements OnInit   {
  pokemon: any;
  id = 1;
  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
      this.getPokemon();
  }

  getPokemon() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).subscribe({
      next: (data) => this.processPkmn(data) ,
      error: (err) => console.log(err),
      complete: () => console.log('termino la llamada pokemon')
      
    });
  }
  before() {
    if (this.id >= 2) this.id--;
    this.getPokemon();
  }

  next() {
    if (this.id <= 600) this.id++;
    this.getPokemon();
  }

  processPkmn(pkmn: any): any {
    const sprites: string[] = [];
    for (const key in pkmn.sprites) {
      if (pkmn.sprites[key] && typeof(pkmn.sprites[key]) == "string"  ) {

        sprites.push(pkmn.sprites[key]);
      }
    }

    this.pokemon =  {
      name: pkmn.name,
      sprites:sprites,
      sound: pkmn.cries.latest,
    }
  }

}
