class Oblong {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.centre = createVector(x + width / 2, y + height / 2);
    this.left = x;
    this.right = x + width;
    this.top = y;
    this.bottom = y + height;
  }

  area() {
    return this.width * this.height;
  }

  shortest(){
    return min(this.width, this.height);
  }

  longest(){
    return max(this.width, this.height);
  }

  aspect() {
    return this.shortest() / this.longest();
  }

  adjacent(other) {
    let horizontal_touch =
      (this.right === other.left || this.left === other.right) &&
      (min(this.bottom, other.bottom) > max(this.top, other.top));
  
    let vertical_touch =
      (this.bottom === other.top || this.top === other.bottom) &&
      (min(this.right, other.right) > max(this.left, other.left));
  
    return horizontal_touch || vertical_touch;
  }
  
  small(){
    return this.width < MIN_SIDE || this.height < MIN_SIDE;
  }

  large(){
    return this.width > MAX_SIDE || this.height > MAX_SIDE;
  }

  massive() {
    return this.area() > MAX_AREA;
  }

  horizontal() {
    return this.orientation() == "horizontal";
  }

  vertical() {
    return this.orientation() == "vertical";
  } 

  orientation() {
    return this.width >= this.height ? "horizontal" : "vertical";
  }

  major() {
    return this.horizontal() ? this.width : this.height;
  }

  minor() {
    return this.horizontal() ? this.height : this.width;
  }

  cut(area) {
    let slice = area / this.minor();

    let x = this.x + (this.horizontal() ? slice : 0);
    let y = this.y + (this.vertical()   ? slice : 0);

    let width =  this.horizontal() ? this.major() - slice : this.minor();
    let height = this.vertical()   ? this.major() - slice : this.minor();

    return new Oblong(x, y, width, height);
  }

  polygon() {
    if (!this._polygon) {
      this._polygon = new MultiPolygon([
        createVector(this.left, this.top),
        createVector(this.right, this.top),
        createVector(this.right, this.bottom),
        createVector(this.left, this.bottom),
      ]);
    }
  
    return this._polygon;
  }

  hatch(spacing, direction, dash, gap) {
    this.polygon().hatch(spacing, direction, dash, gap);
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}
