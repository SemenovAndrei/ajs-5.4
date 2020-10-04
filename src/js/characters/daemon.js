import Character from './character';

/**
* Создает персонажа с классом Daemon
*/
export default class Daemon extends Character {
  constructor(name) {
    super(name);

    this.type = 'daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
