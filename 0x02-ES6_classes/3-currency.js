export default class Currency {
  constructor(code, name) {
   
    this._name = name;
    this._code = code;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  // Getter and setter for length
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'number') {
      throw new Error('code must be a number');
    }
    this._code = value;
  }
displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
