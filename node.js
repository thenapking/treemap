// TODO redefine area to expected area
// Then link area to oblong once assigned
class Node {
  constructor(oblong, depth = 0, parent = null) {
    this.oblong = oblong;
    this.depth = depth;
    this.parent = parent;

    this.weight = 1;
    this.area = 0;
    this.children = [];
  }

  recurse() {
    if (this.terminate()) return;

    let count = this.litter_size();

    let weights = []
    for (let i = 0; i < count; i++) {
      let weight = this.newborn_weight();
      weights.push(weight);
    }

    let children = this.birth(weights);
    let placed = this.place(children);

    if (!placed) {
      console.log("Failed to place children at depth " + this.depth);
    
      return;
    }

    this.children = placed;

    for (let child of this.children) {
      child.recurse();
    }
  }

  place(children) {
    let oblong = new Oblong(this.oblong.x, this.oblong.y, this.oblong.w, this.oblong.h);
    let row = new Row(this.oblong);
    let stack = [];
    let remaining = children.slice();
  
    while (true) {
      if (remaining.length === 0) {
        let placed = stack.concat(row.place());
        placed = this.valid(placed) ? placed : null;
        return placed;
      }
  
      let next = remaining[0];
      let rest = remaining.slice(1);
  
      if (row.better(next)) {
        row.add(next);
        remaining = rest;
      } else {
        if (row.empty()) {
          row.add(next);
          remaining = rest;
          continue;
        }

        let placed = row.place();
        if (!this.valid(placed)) {
          return null;
        }
        
        stack = stack.concat(placed);
        let new_oblong = row.cut();
        if(new_oblong.width <= 0 || new_oblong.height <= 0) {
          return null;
        }
        oblong = new_oblong;
        row = new Row(oblong);
      }
    }
  }

  valid(nodes) {
    if (this.depth < 2) return true;
  
    for (let node of nodes) {
      if (node.oblong.small()) return false;
      if (node.oblong.massive()) return true;
      if (node.oblong.aspect() < MIN_ASPECT) return false;
    }
  
    return true;
  }

  terminate() {
    if (this.oblong.large()) return false;
    if (this.oblong.massive()) return false;
    if (this.depth >= MAX_DEPTH) return true;
    if (this.oblong.small()) return true;

    if (this.depth >= 3) {
      let chance = map(this.depth, 3, 10, 0.08, 0.35, true);
      if (random() < chance) return true;
    }

    return false;
  }

  newborn_weight() {
    let t = pow(constrain(this.depth / MAX_DEPTH, 0, 1), 0.002);

    let mean = lerp(20.0, 20.0, t);
    let sd = lerp(5, 1.37, t);

    if (this.depth < 1) {
      mean = 1;
      sd = 0.5;
    }
    
    return exp(randomGaussian(mean, sd));
  }

  litter_size() {
    let t = constrain(this.depth / MAX_DEPTH, 0, 1);
    let c = round(lerp(2, 8, t));

    return floor(random(c, c + 1));
  }

  birth(weights) {
    let children = [];
    let total = 0;

    for(let weight of weights) {
      let child = new Node(
        null,
        this.depth + 1,
        this
      );
      child.weight = weight;
      total += child.weight;
      children.push(child);
    }

    let scale = this.oblong.area() / total;

    for (let child of children) {
      child.area = child.weight * scale;
    }

    return children.sort((a, b) => b.weight - a.weight);
  }

  // bin by log-area so that visually similar sizes are grouped together
  bin() {
    let total_area = W * H;
    this.area_ratio =  this.oblong.area() / total_area;
    
    // Large rectangles will not join the revolution
    if (this.area_ratio > WEALTHY_THRESHOLD) {
      return -1;
    }

    // randomly assign some rectangles
    if (random() < 0.35) {
      let colours = palette.colours;
      let index = floor(random(colours.length));
  
      return index;
    }
    
    // stratify the rest by area ratio
    let bins = palette.colours.length;
  
    let ratio = (MIN_SIDE * MIN_SIDE) / total_area;
  
    let min = Math.log(ratio);
    let max = Math.log(MAX_RATIO);
    let value = Math.log(this.area_ratio);
  
    let t = map(value, min, max, 0, 1, true);
  
    let index = floor((1 - t) * bins);
    index = constrain(index, 0, bins - 1);
  
    return index;
  }
}


const MAX_RATIO = 0.02
