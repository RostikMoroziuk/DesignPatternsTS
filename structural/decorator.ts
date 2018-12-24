// 1 component i
export interface Notifier {
  send(): void;
}

// 2 component
export class Email implements Notifier {
  private message: String;

  constructor(message: String) {
    this.message = message;
  }

  public send(): void {
    console.log("send email");
  }
}

// 3 base decorator
export class Decorator implements Notifier {
  private notifier: Notifier;

  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  public send(): void {
    this.notifier.send();
  }
}

// 4 concrete decorator
export class SlackDecorator extends Decorator {
  constructor(notifier: Notifier) {
      super(notifier);
  }

  public operation(): void {
      super.send();
      console.log("slack send notification");
  }
}

const decorator: Decorator = new SlackDecorator(new Email("email"));
decorator.send();