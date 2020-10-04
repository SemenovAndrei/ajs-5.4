import Character from './character';

/**
* Создает персонажа с классом Undead
*/
export default class Undead extends Character {
  constructor(name) {
    super(name);

    this.type = 'undead';
    this.attack = 25;
    this.defence = 25;
  }
}
