export default class Building {
  constructor(sqft) {
   if (typeof sqft !== 'number') throw new Error();
        this.evacuationWarningMessage();
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
