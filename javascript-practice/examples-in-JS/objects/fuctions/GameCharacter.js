class Warrior {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = 15;
    this.defense = 10;
    this.isAlive = true;
  }

  attack(target) {
    if (!this.isAlive) {
      console.log(`${this.name} cannot attack because they are not alive.`);
      return;
    }

    const damage = this.calculateDamage(target.defense);
    target.takeDamage(damage);
    console.log(`${this.name} attacks ${target.name} for ${damage} damage!`);

    if (!target.isAlive) {
      console.log(`${target.name} has been defeated!`);
    }
  }

  calculateDamage(defense) {
    return this.strength - defense * 0.5;
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.isAlive = false;
      this.health = 0;
    }
  }

  heal() {
    if (this.isAlive) {
      this.health = Math.min(this.health + 20, 100);
      console.log(
        `${this.name} heals for 20 HP. Current health: ${this.health}`
      );
    } else {
      console.log(`${this.name} cannot heal because they are not alive.`);
    }
  }

  getStatus() {
    return `${this.name} - Health: ${this.health}, Strength: ${this.strength}, Defense: ${this.defense}`;
  }
}

const warrior1 = new Warrior("Aragorn");
const warrior2 = new Warrior("Boromir");

warrior1.attack(warrior2);
warrior2.heal();
console.log(warrior1.getStatus());
console.log(warrior2.getStatus());
