class Cascade {
  constructor() {
    this.agents = [];
    this.start_time = t;
    this.end_time = null;
    this.total_activated = 0;
    this.activated = 0;
    this.previous_activated = 0;
    this.reverted = 0;
  }

  duration() {
    if (this.end_time) {
      return this.end_time - this.start_time;
    } else {
      return t - this.start_time;
    }
  }

  active(){
    return this.activated > 0;
  }

  initiate(){
    if(!!this.end_time) { return }  
    
    let selected = this.select_agents();
    let agent = random(selected)

    if(!agent) { 
      this.finish();
      return;
    }
    
    agent.state = ACTIVE;
    agent.catalyst = true;
    this.agents.push(agent);
    this.activated++;
    for(let neighbour of agent.neighbours) {
      if(neighbour.state < ACTIVE && neighbour.bin >= 0) {
        neighbour.state = ACTIVE;
        this.agents.push(neighbour);
        this.activated++;
      }
    }
  }

  select_agents(){
    if(catalyst.revolution_is_young()){
      return agents.filter(a => a.lowest_class && a.yearning_for_revolution());
    } else {
      return agents.filter(a => !a.upper_class && a.yearning_for_revolution());
    }
  }

  update() {
    this.previous_activated = this.total_activated;
    this.total_activated += this.activated;
    this.activated = 0;
  }

  finish() {
    this.end_time = t;

    if(this.total_activated > 0) { 
      total_activations++; 
      number_of_zero_cascades = 0;
    } else {
      number_of_zero_cascades++;
    }
  }

  abort(){
    for(let agent of this.agents) {
      agent.state = INACTIVE;
      this.reverted++;
    }
  }
}

