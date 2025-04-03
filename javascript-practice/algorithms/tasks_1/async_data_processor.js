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
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }

  async ferchData(url, retries = 3, baseDelay = 300) {
    if (this.cache.has(url)) {
      console.log(`${new Date().toISOString()} - Cache hit for ${url}`);
      return this.cache.get(url);
    }
    let attempt = 0;
  }
}
