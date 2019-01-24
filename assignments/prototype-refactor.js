/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// === GameObject ===

class GameObject {
    constructor(props) {
        this.createdAt = props.createdAt;
        this.dimensions = {
            length: props.dimensions.length,
            width: props.dimensions.width,
            heigth: props.dimensions.height
        };
    }

    destroy() {
        return `${this.name} was removed from the game`;
    }
}

// === CharacterStats ===

class CharacterStats extends GameObject {
    constructor(props) {
        super(props);
        this.healthPoints = props.healthPoints;
        this.name = props.name;
    }

    takeDamage() {
        return `${this.name} took damage`;
    }
}

// === Humanoid (Having an appearance or character resembling that of a human.) ===

class Humanoid extends CharacterStats {
    constructor(props) {
        super(props);
        this.team = props.team;
        this.weapons = props.weapons;
        this.language = props.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }

    damage() {
        this.healthPoints -= 1;
        console.log(this.takeDamage());
        if (this.healthPoints <= 0) {
            console.log(this.destroy());
        }
    }
}

// === Instances of Humanoid ===

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// === Stretch ===

class Villain extends Humanoid {
    constructor(props) {
        super(props)
    }

}

class Hero extends Humanoid {
    constructor(props) {
        super(props)
    }
}

const newVillan = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Araf',
    team: 'Kingdom',
    weapons: [
        'Giant Sword',
        'Dagger',
    ],
    language: 'Elvish',
});

const newHero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 5,
        width: 1,
        height: 2,
    },
    healthPoints: 3,
    name: 'Queen Shire',
    team: 'The Castle',
    weapons: [
        'Bow',
    ],
    language: 'Castle Speak',
});



newVillan.damage();
newVillan.damage();
newHero.damage();
newVillan.damage();
newHero.damage();
newVillan.damage();
newHero.damage();
newHero.damage();