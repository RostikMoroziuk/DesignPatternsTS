// 1
export interface Shape {
  clone(): Shape;
  toString(): string;
}

// 2
export class Rectangle implements Shape {
  clone() : Shape {
    return new Rectangle();
  }

  toString(): string {
    return "This is Rectangle";
  }
}

export class Circle implements Shape {
  clone() : Shape {
      return new Circle();
  }

  toString(): string {
    return "This is Circle";
  }
}

// 3
class Builder {
  private prototypeMap: { [className: string]: Shape; } = {};

  constructor() {
    this.prototypeMap['rectangle'] = new Rectangle();
    this.prototypeMap['circle'] = new Circle();
  }

  createOne(className: string): Shape {
    return this.prototypeMap[className].clone();
  }
}

const builder : Builder = new Builder();
builder.createOne('rectangle').toString();
