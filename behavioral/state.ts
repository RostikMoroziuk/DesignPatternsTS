// 2 shared state interface
export interface State {
  handle(context: Context): void;
}

// 3 implement state
export class ConcreteStateA implements State {
  public handle(context: Context): void {
    console.log("`handle` method of ConcreteStateA is being called!");
    context.State = new ConcreteStateB();
  }
}

export class ConcreteStateB implements State {
  public handle(context: Context): void {
    console.log("`handle` method of ConcreteStateB is being called!");
    context.State = new ConcreteStateA();
  }
}

// 1 create context class
export class Context {
  // 4 field with state
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  get State(): State {
    return this.state;
  }

  set State(state: State) {
    this.state = state;
  }

  public request(): void {
    console.log("request is being called!");
    // 5 handle state
    this.state.handle(this);
  }
}

const context: Context = new Context(new ConcreteStateA());
context.request();
context.request();
context.request();