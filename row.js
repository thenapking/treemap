class Row {
  constructor(oblong) {
    this.oblong = oblong;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  empty() {
    return this.items.length === 0;
  }

  area() {
    let total = 0;

    for (let item of this.items) {
      total += item.area;
    }

    return total;
  }

  min() {
    let m = Infinity;

    for (let item of this.items) {
      m = min(m, item.area);
    }

    return m;
  }

  max() {
    let m = 0;

    for (let item of this.items) {
      m = max(m, item.area);
    }

    return m;
  }

  ratio() {
    let s = sq(this.oblong.shortest() / this.area());

    return max(this.max() * s, 1 / (this.min() * s)
    );
  }

  better(other) {
    if (this.empty()) return true;

    let test = new Row(this.oblong);
    test.items = this.items.slice();
    test.add(other);

    return test.ratio() <= this.ratio();
  }

  place() {
    let placed = [];
    let thickness = this.area() / this.oblong.minor();
    let offset = 0;
  
    for (let item of this.items) {
      let length = item.area / thickness;
  
      let x = this.oblong.x + (this.oblong.vertical()   ? offset : 0);
      let y = this.oblong.y + (this.oblong.horizontal() ? offset : 0);
      let width =  this.oblong.horizontal() ? thickness : length;
      let height = this.oblong.vertical()   ? thickness : length;
  
      item.oblong = new Oblong(x, y, width, height);
  
      placed.push(item);
      offset += length;
    }
  
    return placed;
  }

  cut() {
    return this.oblong.cut(this.area());
  }
}


