export interface Iterator {
  next(): any;
  hasNext(): boolean;
}

export interface Aggregator {
  createIterator(): Iterator;
}

export class ConcreteIterator implements Iterator {
  private position: number = 0;

  constructor(private collection: any[]) {}

  public next(): any {
    const result = this.collection[this.position++];
    return result;
  }

  public hasNext(): boolean {
    return this.position < this.collection.length;
  }
}

export class Numbers implements Aggregator {
  private collection: number[] = [];

  constructor(collection: number[]) {
    this.collection = collection;
  }
  public createIterator(): Iterator {
    return new ConcreteIterator(this.collection);
  }
}

const nArray = [1, 7, 21, 657, 3, 2, 765, 13, 65];
const numbers: Numbers = new Numbers(nArray);
const it: ConcreteIterator = <ConcreteIterator>numbers.createIterator();

while (it.hasNext()) {
  console.log(it.next());
}
