// An orchestrator class for cascades
class Catalyst {
  constructor() {
    this.current = null;
    this.cascades = [];
    this.largest = null;
    this.failed = false;
  }

  process() {
    if (debug) return;
    if(simulation_stopped) { return; }

    if (this.ending()) {
      this.finish();
      this.create();
    } else {
      this.update();
    }

    if (this.storm_the_palace()) {
      this.stop();
    }
  }

  create() {
    this.current = new Cascade();
    this.current.initiate();

    if (this.in_progress()) {
      this.cascades.push(this.current);
      this.failed = false;
    } else {
      this.failed = true;
    }
  }

  update() {
    if(t % UPDATE_INTERVAL !=0) { return; }

    this.current.update();
    this.set_largest();
  }

  finish() {
    this.current.finish();

    if (this.revolution_is_young() && this.too_small()) {
      this.abort();
    }
  }

  abort() {
    console.log("Cops beat back the protest.");
    this.current.abort();
    number_of_zero_cascades++;
  }

  // HELPERS
  set_largest() {
    if (!this.largest) {
      this.largest = this.current;
    }

    if (this.current.total_activated > this.largest.total_activated) {
      this.largest = this.current;
    }
  }

  // STATES
  active(){
    return this.current.active();
  }

  duration() {
    return this.current.duration();
  }

  in_progress() {
    return this.current.end_time == null;
  }

  ending() {
    return (!this.active() && this.duration() > 0);
  }

  // the catalyst typically fails when there are no more agents to activate
  storm_the_palace() {
    return (number_of_zero_cascades > 100 || total_activations > TOTAL_ACTIVATIONS || this.failed);
  }

  stop() {
    console.log("Total activations: " + total_activations);
    if(this.largest_cascade != undefined) { console.log("Largest cascade: " + largest_cascade.total_activated); }
    console.log("Stopping simulation.");
    simulation_stopped = true;
  }

  revolution_is_young() {
    return activated < 0.5 * agents.length;
  }

  too_small() {
    return this.current.total_activated < SMALLEST_CASCADE;
  }

  deactivate() {
    for (let agent of agents) {
      agent.state = INACTIVE;
    }
  }
}
