class Event {
    constructor() {
        this.handlers = new Map();
        this.count = 0;
    }

    subscribe(handler) {
        console.log(`----- Event :: subscribe :: handler :: `, handler)
        
        this.handlers.set(++this.count, handler);
        console.log(`----- Event :: subscribe :: this.handlers :: `, this.handlers)
        // console.log(`----- Event :: subscribe :: handler.func1 :: `,handler())
        return this.count;
    }

    unsubscribe(idx) {
        this.handlers.delete(idx);
    }

    fire(sender, args) {
        console.log(`----- Event :: fire :: sender :: `, sender)
        console.log(`----- Event :: fire :: args :: `, args)
        // console.log(`----- Event :: this.handlers :: `, this.handlers)
        this.handlers.forEach(function (v, k) {
            console.log(`----- Event :: this.handlers :: v : `,v)
            v(sender, args);
        });
    }
}

let WhatToQuery = Object.freeze({
    'attack': 1,
    'defense': 2
});

class Query {
    constructor(creatureName, whatToQuery, value) {
        this.creatureName = creatureName;
        this.whatToQuery = whatToQuery;
        this.value = value;
    }
}

class Game {
    constructor() {
        this.queries = new Event();
    }

    performQuery(sender, query) {
        console.log(`----- Game :: performQuery ::`);

        this.queries.fire(sender, query);
    }
}

class Creature {

    constructor(game, name, attack, defense) {
        this.game = game;
        this.name = name;
        this.initial_attack = attack;
        this.initial_defense = defense;
    }

    func() {
        return true;
    }

    get attack() {
        console.log(`----- Creature :: attack :: `)

        let q = new Query(this.name, WhatToQuery.attack,
            this.initial_attack);
        this.game.performQuery(this, q);
        return q.value;
    }

    get defense() {
        console.log(`----- Creature :: defense :: `)

        let q = new Query(this.name, WhatToQuery.defense,
            this.initial_defense);
        this.game.performQuery(this, q);
        return q.value;
    }

    toString() {
        // return `${this.name}: (${this.attack}/${this.defense})`;
        return `${this.name}: (${this.attack}/0)`;
    }
}

class CreatureModifier {
    constructor(game, creature) {
        this.game = game;
        this.creature = creature;
        this.token = game.queries.subscribe(
            // this.handle.bind(this)
            this.handle
        );
    }

    handle(sender, query) {
        console.log(`----- CreatureModifier :: handle :: `)

        // implement in inheritors
    }

    func1(){
        console.log(`======`)
    }

    dispose() {
        console.log(`----- CreatureModifier :: dispose :: `)

        game.queries.unsubscribe(this.token);
    }
}

class DoubleAttackModifier extends CreatureModifier {
    constructor(game, creature) {
        super(game, creature);
    }

    handle1(sender, query){

        console.log(`----- DoubleAttackModifier :: handle1 :: sender :: `, sender)
    }

    handle(sender, query) {
        console.log(`-------==========`)
        console.log(`----- DoubleAttackModifier :: handle :: sender :: `, sender)
        console.log(`----- DoubleAttackModifier :: handle :: query :: `, query)

        if (query.creatureName === this.creature.name &&
            query.whatToQuery === WhatToQuery.attack) {
            query.value *= 2;
        }
    }
}

class IncreaseDefenseModifier extends CreatureModifier {
    constructor(game, creature) {
        super(game, creature);
    }

    handle(sender, query) {
        console.log(`----- IncreaseDefenseModifier :: handle :: sender :: `, sender)
        console.log(`----- IncreaseDefenseModifier :: handle :: query :: `, query)
        if (query.creatureName === this.creature.name &&
            query.whatToQuery === WhatToQuery.defense) {
            query.value += 2;
        }
    }
}

let game = new Game();
let goblin = new Creature(game, 'Strong Goblin', 2, 2);
console.log(`-------------------------------------------`)
console.log(`-------------------------------------------`)
console.log(goblin.toString());

console.log(`-------------------------------------------`)
console.log(`-------------------------------------------`)
let dam = new DoubleAttackModifier(game, goblin);
console.log(goblin.toString());

// let idm = new IncreaseDefenseModifier(game, goblin);
// console.log(goblin.toString());
// idm.dispose();

// dam.dispose();
// console.log(goblin.toString());