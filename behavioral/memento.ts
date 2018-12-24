// 1
export class State {
  private str: string;

  constructor(str: string) {
    this.str = str;
  }

  get Str() : string {
    return this.str;
  }

  set Str(str: string) {
    this.str = str;
  }
}

export class Originator {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  get State(): State {
    return this.state;
  }

  set State(state: State) {
    console.log("State :: ", state);
    this.state = state;
  }

  // 3
  public createMemento(): Memento {
    console.log("creates a memento with a given state!");
    return new Memento(this.state);
  }

  // 4
  public setMemento(memento: Memento) {
    console.log("sets the state back");
    this.State = memento.State;
  }
}

// 2 
export class Memento {
  private state: State;

  constructor (state: State) {
    this.state = state;
  }

  get State(): State {
    console.log("get memento's state");
    return this.state;
  }
}

// 5
export class CareTaker {
  private memento: Memento;

  get Memento(): Memento {
    return this.memento;
  }

  set Memento(memento: Memento) {
    this.memento = memento;
  }
}

const state: State = new State("... State ");
const originator: Originator = new Originator(state);
const careTaker: CareTaker = new CareTaker();

careTaker.Memento = originator.createMemento();
originator.State = new State("something else...");

originator.setMemento(careTaker.Memento);