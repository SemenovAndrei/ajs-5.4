import Character from './character';

/**
* Создает персонажа с классом Bowman
*/
export default class Bowman extends Character {
  constructor(name) {
    super(name);

    this.type = 'bowman';
    this.attack = 25;
    this.defence = 25;
  }
}
