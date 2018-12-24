// 1 base command
export class Command {
  public execute(): void {
    throw new Error("Abstract method!");
  }
}

// 2 concrete command
export class Save extends Command {
  private receiver: Store;

  constructor(receiver: Store) {
    super();
    this.receiver = receiver;
  }

  public execute(): void {
    console.log("`execute` method of ConcreteCommand1 is being called!");
    this.receiver.action();
  }
}

// view
export class Button {
  private commands: Command[];

  constructor() {
    this.commands = [];
  }

  public click(cmd: Command) {
    this.commands.push(cmd);
    cmd.execute();
  }
}

// logic
export class Store {
  public action(): void {
    console.log("action is being called!");
  }
}

// 3
const receiver: Store = new Store(),
// 4
command1: Command  = new Save(receiver),
invoker: Button  = new Button();

// 5 invoke
invoker.click(command1);
