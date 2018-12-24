class Adaptee {
  public method(): void {
    console.log("`method` of Adaptee is being called");
  }
}

// 1
interface Target {
  call(): void;
}

// 2
class Adapter implements Target {
  // 3
  public call(): void {
    console.log("Adapter's `call` method is being called");
    const adaptee: Adaptee = new Adaptee();
    adaptee.method();
  }
}

const adapter: Adapter = new Adapter();
adapter.call();