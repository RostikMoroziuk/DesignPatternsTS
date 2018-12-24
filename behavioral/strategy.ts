// 1
export interface Strategy {
  execute(): void;
}

// 3
export class ConcreteStrategy1 implements Strategy {
  public execute(): void {
    console.log("`execute` method of ConcreteStrategy1 is being called");
  }
}

export class ConcreteStrategy2 implements Strategy {
  public execute(): void {
    console.log("`execute` method of ConcreteStrategy2 is being called");
  }
}

export class ConcreteStrategy3 implements Strategy {
  public execute(): void {
    console.log("`execute` method of ConcreteStrategy3 is being called");
  }
}

// 2
export class Context {
  // 4
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public executeStrategy(): void {
    this.strategy.execute();
  }
}

let context: Context = new Context(new ConcreteStrategy1());

context.executeStrategy();
context = new Context(new ConcreteStrategy2());
context.executeStrategy();

context = new Context(new ConcreteStrategy3());
context.executeStrategy();