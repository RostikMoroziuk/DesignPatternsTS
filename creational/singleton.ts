class Singleton {
  // 1
  private static singleton: Singleton;

  // 4 
  private constructor() {}

  // 2
  public static getInstance(): Singleton {
    // 3
    if (!Singleton.singleton) {
        Singleton.singleton = new Singleton();
    }
    return Singleton.singleton;
  }
}

const singleton1 = Singleton.getInstance();
