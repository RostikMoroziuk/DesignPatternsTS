export interface ColorI {
  draw(): void;
}

// 1 base abstract
export class Shape {
  // 3
  color: ColorI;
  constructor(color: ColorI) {
    this.color = color;
  }

  public callIt(): void {}
}

export class Circle extends Shape {
  constructor(color: ColorI) {
    super(color);
  }

  public callIt(): void {
    console.log("This is Circle");
    this.color.draw();
  }
}

export class Square extends Shape {
  constructor(color: ColorI) {
    super(color);
  }

  public callIt(): void {
    console.log("This is Square");
    this.color.draw();
  }
}

// 2
export class Red implements ColorI {
  public draw() : void {
    console.log("red");
  }
}

export class Blue implements ColorI {
  public draw() : void {
    console.log("blue");
  }
}

// 4
const red = new Red();
const shape = new Circle(red);
shape.callIt();
