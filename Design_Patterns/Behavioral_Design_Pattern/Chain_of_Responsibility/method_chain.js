class Creature {
    constructor(name, attack, defense) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
    }

    toString() {
        return `${this.name} (${this.attack}/${this.defense})`;
    }

}

class CreatureModifier {
    constructor(creature) {
        this.creature = creature;
        this.next = null;
    }

    add(modifier) {
        if (this.next) {
            // console.log(`--- add :: already added : 1 :`, this.next);
            this.next.add(modifier);
            // console.log(`--- add :: already added : 2 :`, this.next);
        } else {
            this.next = modifier;
            // console.log(`--- add :: already not added :`, this.next);
        }
    }

    handle() {

        if (this.next) {
            // console.log(`--- CreatureModifier :: handle : 2 `, this.next);
            this.next.handle(); // this design pattern
            // console.log(`--- CreatureModifier :: handle : 3 `, this.next);
        }
    }

}

class DoubleAttackModifier extends CreatureModifier {
    constructor(creature) {
        super(creature);
    }
    handle() {
        console.log(`--------------------------------------------------`);
        console.log(`Doubling ${this.creature.name}'s attack`);
        this.creature.attack *= 2;
        super.handle();
    }
}


class NoBonusesModifier extends CreatureModifier {
    constructor(creature) {
        super(creature);
    }

    handle() {
        console.log('No bonuses for you!');
        // super.handle();
    }
}

class IncreaseDefenseModifier extends CreatureModifier {
    constructor(creature) {
        super(creature);
    }

    handle() {
        if (this.creature.attack <= 2) {
            console.log(`Increasing ${this.creature.name}'s defense`);
            this.creature.defense++;
        }
        super.handle();
    }
}

let goblin = new Creature('Goblin', 1, 1);
console.log(goblin.toString());


let root = new CreatureModifier(goblin);
root.add(new DoubleAttackModifier(goblin));
// root.add(new DoubleAttackModifier(goblin));

// root.add(new NoBonusesModifier(goblin));

root.add(new IncreaseDefenseModifier(goblin));


root.handle();
console.log(`--------------------------------------------------`);
console.dir(root, { depth: 5 });
console.log(`--------------------------------------------------`);

// console.dir(root, { depth: 5 });
console.log(goblin.toString());