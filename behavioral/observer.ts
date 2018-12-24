// 2 create publisher
export class Publisher {
  private observers: Subscriber[] = [];

  // 3 subscribe to event
  public register(observer: Subscriber): void {
    console.log(observer, "is pushed!");
    this.observers.push(observer);
  }

  public unregister(observer: Subscriber): void {
    const n: number = this.observers.indexOf(observer);
    console.log(observer, "is removed");
    this.observers.splice(n, 1);
  }

  // 4 notify all subscribers
  public notify(): void {
    console.log("notify all the observers", this.observers);

    for (let i = 0, max = this.observers.length; i < max; i += 1) {
      this.observers[i].notify(i);
    }
  }
}

// 1 create subscriber
export class Subscriber {
  private name: string;
  private state: number;

  constructor (name: string) {
    console.log("ConcreteObserver", name, "is created!");
    this.name = name;
  }

  public notify(message: number): void {
    console.log("ConcreteObserver's notify method");
    console.log(this.name, this.state);
    this.state = message;
  }
}