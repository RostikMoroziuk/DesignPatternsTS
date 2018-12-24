// 1 shared interface
export interface Subject {
  doAction(): void;
}

// 2 proxy
export class Proxy implements Subject {
  // 2.1 link to subject
  private realSubject: RealSubject;

  constructor(private field: string) {}

  // 3
  public doAction(): void {
    console.log(`doAction of Proxy ${this.field}`);
    // 4 lazy init
    if (this.realSubject === null || this.realSubject === undefined) {
      console.log("creating a new RealSubject.");
      this.realSubject = new RealSubject(this.field);
    }
    this.realSubject.doAction();
  }
}

export class RealSubject implements Subject {
  constructor(private field: string) {}
  public doAction(): void {
    console.log(`doAction of RealSubject, ${this.field}, is being called!`);
  }
}

const proxy1: Proxy = new Proxy("proxy1");
const proxy2: Proxy = new Proxy("proxy2");

proxy1.doAction();
proxy1.doAction();
proxy2.doAction();
proxy2.doAction();
