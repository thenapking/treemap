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
    this.time = 0;
    this.catalyst = false;
  }

  update(){
    if(debug) { return; }
    
    this.observe();
    this.contagion();
    this.fade();
  }

  contagion() {
    if(!this.update_required()) { return }

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
    if(!this.update_required()) { return }

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

  update_required(){
    if(t % UPDATE_INTERVAL != 0) { return false }
    if(this.state > INACTIVE) { return false }
    if(this.upper_class) { return false } 

    return true
  }

  state_changed() {
    return this.state != this.previous_state;
  }

  threshold_passed(){
    return this.value > THRESHOLD;
  }

  yearning_for_revolution(){
    return !this.upper_class && !this.threshold_passed() && this.state == INACTIVE && !this.catalyst;
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

  fade() {
    if(this.state > INACTIVE && this.time < FADE_TIME) {
      this.time++;
    }
    
    if(this.state == INACTIVE && this.time > 0) {
      this.time--;
    }
  }

  draw(){
    if (!this.oblong) { return }
    let colour = blank;
    if(this.bin >= 0 && this.time > 0) { colour = color(palette.colours[this.bin]); }
    if(this.time > 0 && this.time <= FADE_TIME) { colour = lerpColor(blank, colour, this.time / FADE_TIME); }
    fill(colour);
    this.oblong.draw();
  }
}
