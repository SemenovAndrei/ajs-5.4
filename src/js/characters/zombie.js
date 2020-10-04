import Character from './character';

/**
* Создает персонажа с классом Zombie
*/
export default class Zombie extends Character {
  constructor(name) {
    super(name);

    this.type = 'zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
