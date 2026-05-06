function connect_agents() {
  build_neighbours();

  if( REWIRING_PROBABILITY > 0) {
    console.log("INTERNET ENABLED")
    solidarity(0.5);
    rewire();
  } else {
    console.log("INTERNET DISABLED")
    solidarity(5);
  }
}

function build_neighbours() {
  for (let agent of agents) {
    agent.neighbours = [];
  }

  for (let i = 0; i < agents.length; i++) {
    let a = agents[i];

    for (let j = i + 1; j < agents.length; j++) {
      let b = agents[j];
      if(a.upper_class || b.upper_class) { continue }
      if(a.in_different_class(b))  { continue }

      if (a.oblong.adjacent(b.oblong)) {
        a.neighbours.push(b);
        b.neighbours.push(a);
      }
    }
  }
}

function solidarity(force){
  let ratio = total_agent_weight / agents.length;
  for(let agent of agents) {
    let desired_neighbours = floor(agent.weight / ratio) * force;

    if(agent.neighbours.length >= desired_neighbours) { continue }

    let count = 0;

    while((count < 1000) && agent.neighbours.length < desired_neighbours) {
      count++;
      let neighbour = random(agents);
      
      if(neighbour == agent) { continue }
      if(neighbour.upper_class) { continue }
      if(agent.too_wealthy(neighbour)) { continue }
      if(agent.too_far(neighbour)) { continue }

      agent.neighbours.push(neighbour);
    }
  }
}

function rewire() {
  let count = 0;
  while(count < agents.length * REWIRING_PROBABILITY) {
    let a = random(agents);
    let b = random(agents);

    if (a == b) { continue }
    if(a.neighbours.includes(b)) { continue }
    if(b.upper_class) { continue }
    if(!a.too_far(b)) { continue }
    
    if(a.neighbours.length > 0) { 
      let original = a.neighbours[0]
      let idx = original.neighbours.indexOf(a);
      original.neighbours.splice(idx, 1);
      a.neighbours.splice(0, 1);
    }

    a.neighbours.push(b);
    b.neighbours.push(a);

    count++;
    
  }
}
