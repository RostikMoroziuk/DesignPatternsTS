// 1 abstract product
interface AbstractChair {
  methodA(): string;
}
interface AbstractTable {
  methodB(): number;
}

// 2 abstract factory
interface AbstractFactory {
  createChair() : AbstractChair;
  createTable() : AbstractTable;
}

// 3 concrete product
class ChairSpheric implements AbstractChair {
  methodA = () => {
    return "ChairSpheric";
  }
}
class TableSpheric implements AbstractTable {
  methodB = () => {
    return 1;
  }
}

class ChairPyramidal implements AbstractChair {
  methodA = () => {
    return "ChairPyramidal";
  }
}
class TablePyramidal implements AbstractTable {
  methodB = () => {
    return 2;
  }
}

// 4 concrete factory
class SphericFactory implements AbstractFactory {
  createChair(param?: any) : AbstractChair {
    return new ChairSpheric();
  }

  createTable(param?: any) : AbstractTable {
    return new TableSpheric();
  }
}

class PyramidalFactory implements AbstractFactory {
  createChair(param?: any) : AbstractChair {
    return new ChairPyramidal();
  }

  createTable(param?: any) : AbstractTable {
    return new TablePyramidal();
  }
}


class Tester {
  private abstractChair: AbstractChair;
  private abstractTable: AbstractTable;

  constructor(factory: AbstractFactory) {
    this.abstractChair = factory.createChair();
    this.abstractTable = factory.createTable();
  }

  public test(): void {
    console.log(this.abstractChair.methodA());
    console.log(this.abstractTable.methodB());
  }
}