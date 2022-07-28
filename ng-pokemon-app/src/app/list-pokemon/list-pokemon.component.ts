import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  constructor() {}

  selectPokemon(pokemonId: string) {
    const index: number = +pokemonId;
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id === +pokemonId
    );

    if (pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}
