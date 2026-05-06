const THRESHOLD = 0.25;
let ACTIVE = 1;
let INACTIVE = 0; 

class Agent {
  constructor(node) {
    this.node = node

    this.oblong = node.oblong;
    this.position = this.oblong.centre;

    this.weight = node.weight;
    this.bin = node.bin() || 0;
    this.upper_class = this.bin < 0;
    this.lowest_class = this.bin == palette.colours.length - 1; 

    this.state = INACTIVE;
    this.previous_state = INACTIVE;
    this.neighbours = [];
    this.colour = palette.colours[this.bin] || palette.blank;;
    this.value = 0;
  }

  colourize() {
    this.colour = (this.state == 0 || this.bin < 0) ? palette.blank : palette.colours[this.bin];
  }

  update(){
    if(debug) { return; }
    this.observe();
    this.contagion();
    this.colourize();
  }

  contagion() {
    if(this.state > INACTIVE) { return }
    if(this.upper_class) { return } 
    
    this.previous_state = this.state;

    if (this.threshold_passed()) {
      this.state = ACTIVE;

      if(this.state_changed()) {
        catalyst.current.activated++;
        catalyst.current.agents.push(this);
      }  
    } else {
      this.state = INACTIVE;
    }
  }

  // How many neighbours are active?
  observe(){
    if(this.state > INACTIVE) { return }
    if(this.upper_class) { return } 

    let sum = 0;
    let total_weight = 0;

    for(let neighbour of this.neighbours) {
      // weight connection by strength
      let d = this.position.dist(neighbour.position);
      let multiplier = d > 1000 ? 0.5 : 1
      sum += neighbour.state * neighbour.weight * multiplier;

      total_weight += neighbour.weight;
    }

    this.value = sum / total_weight;
  }

  state_changed() {
    return this.state != this.previous_state;
  }

  threshold_passed(){
    return this.value > THRESHOLD;
  }

  yearning_for_revolution(){
    return !this.upper_class && !this.threshold_passed() && this.state == INACTIVE;
  }

  in_different_class(other) {
    return abs(this.bin - other.bin) > 2;
  }

  too_far(other) {
    return this.position.dist(other.position) > 300;
  }

  too_wealthy(other) {
    let a_area = this.oblong.area();
    let b_area = other.oblong.area();

    return abs(a_area - b_area) > 1000;
  }

  draw(){
    if (!this.oblong) { return }
    if(this.colour) {  fill(this.colour); }

    this.oblong.draw();
  }
}
