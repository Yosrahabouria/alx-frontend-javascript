export default class Building {
  constructor(sqft) {
   
    this._sqft = sqft;
  }

  // Getter and setter for name
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    
    this._sqft = value;
  }

 evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
