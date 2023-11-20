/**
 * the open–closed principle (OCP)
 * 
 * software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification
 */

let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
    yuge: 'yuge'
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];


class ColorSpecification {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(item) {
        return item.color === this.color;
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(item) {
        return item.size === this.size;
    }
}

class BetterFilter {
    filter(items, spec) {
        const data = items.filter(x => spec.isSatisfied(x));

        // console.log(`--- BetterFilter :: data :: `, data);

        return data;
    }
}

// specification combinator
class AndSpecification {
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(item) {
        const data = this.specs.every(x => x.isSatisfied(item));

        // console.log(`--- AndSpecification :: data :: `, data);

        return data;
    }
}


let bf = new BetterFilter();
console.log(`Green products (new):`);
for (let p of bf.filter(products,
    new ColorSpecification(Color.green))) {
    console.log(` * ${p.name} is green`);
}

console.log(`Large products:`);
for (let p of bf.filter(products,
    new SizeSpecification(Size.large))) {
    console.log(` * ${p.name} is large`);
}

console.log(`Large and green products:`);
let spec = new AndSpecification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
);
for (let p of bf.filter(products, spec))
    console.log(` * ${p.name} is large and green`);

