class DataProcessor {
  static instance;

  constructor() {
    if (DataProcessor.instance) {
      return DataProcessor.instance;
    }

    this.cache = new Map();
    this.processingQueue = [];
    this.isProcessing = false;
    this.observers = [];

    DataProcessor.instance = this;
  }

  subscribe(observer) {
    if (typeof observer.update === "function") {
      this.observers.push(observer);
      return () => this.unsubscribe(observer);
    }
    throw new Error("Observer must implement update method");
  }

  unsubscribe(observer) {
    this.observer = this.observers.filter((obs) => obs !== observer);
  }
}
