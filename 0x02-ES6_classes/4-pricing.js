// 4-pricing.js
import Currency from './3-classroom.js';

export default class Pricing {
  constructor(amount, currency) {
    this._currency = currency;
    this._amount = amount;
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}

