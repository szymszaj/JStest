const Character = {
  createWarrior(name) {
    return {
      name,
      health: 100,
      strength: 15,
      defense: 10,
      isAlive: true,

      attack(target) {
        const damage = this.strength - target.defense * 0.5;
        target.health -= damage;
        console.log(
          `${this.name} attacks ${target.name} for ${damage} damage!`
        );

        if (target.health <= 0) {
          target.isAlive = false;
          target.health = 0;
          console.log(`${target.name} has been defeated!`);
        }
      },

      heal() {
        if (this.isAlive) {
          this.health += 20;
          if (this.health > 100) this.health = 100;
          console.log(
            `${this.name} heals for 20 HP. Current health: ${this.health}`
          );
        }
      },

      getStatus() {
        return `${this.name} - Health: ${this.health}, Strength: ${this.strength}, Defense: ${this.defense}`;
      },
    };
  },
};
const player1 = Character.createWarrior("Hero");
const enemy = Character.createWarrior("Dragon");

// player1.attack(enemy);
// enemy.getStatus();
// player1.heal();
