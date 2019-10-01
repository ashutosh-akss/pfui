class Logs {
  constructor() {
    this.logs = [];
  }

  add(type, data) {
    this.logs = this.logs.concat({
      type,
      data
    });
  }

  get() {
    return this.logs;
  }
}

export default new Logs();