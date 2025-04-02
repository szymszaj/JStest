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
}
