// Context class that contains information about the current state
class Context {
    private variables: Map<string, number> = new Map();

    public setVariable(name: string, value: number): void {
        this.variables.set(name, value);
    }

    public getVariable(name: string): number | undefined {
        return this.variables.get(name);
    }
}

// AbstractExpression interface representing expressions in the language
interface AbstractExpression {
    interpret(context: Context): number;
}

// TerminalExpression representing a literal value
class NumberExpression implements AbstractExpression {
    constructor(private value: number) {}

    interpret(context: Context): number {
        return this.value;
    }
}

// NonTerminalExpression representing addition
class AddExpression implements AbstractExpression {
    constructor(private left: AbstractExpression, private right: AbstractExpression) {}

    interpret(context: Context): number {
        return this.left.interpret(context) + this.right.interpret(context);
    }
}

// NonTerminalExpression representing subtraction
class SubtractExpression implements AbstractExpression {
    constructor(private left: AbstractExpression, private right: AbstractExpression) {}

    interpret(context: Context): number {
        return this.left.interpret(context) - this.right.interpret(context);
    }
}

// Client code
const context = new Context();
context.setVariable('x', 10);
context.setVariable('y', 5);

const expression = new AddExpression(
    new NumberExpression(20),
    new SubtractExpression(
        new NumberExpression(15),
        new NumberExpression(5)
    )
);

const result = expression.interpret(context);
console.log('Result:', result);
