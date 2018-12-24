// 1
export interface Mediator {
  send(msg: string, colleague: Colleague): void;
}

export class Colleague {
  public mediator: Mediator;

  constructor(mediator: Mediator) {}

  public send(msg: string): void {
    throw new Error("Abstract Method!");
  }

  public receive(msg: string): void {
    throw new Error("Abstract Method!");
  }
}

// 3
export class ConcreteColleagueA extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  public send(msg: string): void {
    // 4
    this.mediator.send(msg, this);
  }

  public receive(msg: string): void {
    console.log(msg, "`receive` of ConcreteColleagueA is being called!");
  }
}

export class ConcreteColleagueB extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  public send(msg: string): void {
    this.mediator.send(msg, this);
  }

  public receive(msg: string): void {
    console.log(msg, "`receive` of ConcreteColleagueB is being called!");
  }
}

// 2
export class ConcreteMediator implements Mediator {
  public concreteColleagueA: ConcreteColleagueA;
  public concreteColleagueB: ConcreteColleagueB;

  public send(msg: string, colleague: Colleague): void {
    if (this.concreteColleagueA === colleague) {
      this.concreteColleagueB.receive(msg);
    } else {
      this.concreteColleagueA.receive(msg);
    }
  }
}

const mediator: ConcreteMediator = new ConcreteMediator();
const obj1: ConcreteColleagueA = new ConcreteColleagueA(mediator);
const obj2: ConcreteColleagueB = new ConcreteColleagueB(mediator);

mediator.concreteColleagueA = obj1;
mediator.concreteColleagueB = obj2;

obj1.send("`send` of ConcreteColleagueA is being called!");
obj1.send("`send` of ConcreteColleagueB is being called!");
