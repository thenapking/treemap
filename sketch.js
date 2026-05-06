const DPI = 96;
const Wi = 12;
const Hi = 20;
const BWi = 1;

const W = Wi * DPI;
const H = Hi * DPI;
const BW = BWi * DPI;
const FW = W + BW * 2;
const FH = H + BW * 2;

const MIN_SIDE = 5;
const MAX_SIDE = 275;
const MAX_AREA = 12500000;
const MAX_DEPTH = 50;
const MIN_ASPECT = 0.1; 


let REWIRING_PROBABILITY = 0;
let SEED = 0;
const TOTAL_ACTIVATIONS = 30;
const MAX_INDEX = 50; // used to constrain weight for stratification

const SMALLEST_CASCADE = 35;
const WEALTHY_THRESHOLD = 0.025;

let activated = 0;
let total_activations = 0;
let number_of_zero_cascades = 0;  
let total_agent_weight = 0;


let agents = [];
let nodes = [];
let root;
let catalyst;

let debug = false;
let t = 0;

function setup() {
  createCanvas(FW, FH);

  set_params();
  initialise_palette();

  create_hierarchy();
  create_agents(root.children);
  connect_agents();
  create_catalyst();
}

function draw() {
  background(palette.paper);
  
  translate(BW, BW)
  
  catalyst.process();

  activated = 0;
  
  for (let agent of agents) {
    agent.update();
    agent.draw();
    if(agent.state > 0) { activated++; }
  }

  t++;
}

function draw_hatched(){
  background(palette.paper);
  noFill();
  
  for(let agent of agents) {
    let oblong = agent.oblong;
    stroke(agent.colour);
    strokeWeight(1);
    oblong.hatch(5, "upwards", 0, 20);
    stroke(palette.paper);
    strokeWeight(5);
    oblong.draw();

  }

  noLoop();
}

function create_hierarchy() {
  let oblong = new Oblong(0, 0, W, H);
  root = new Node(oblong);
  root.recurse();
}

function create_catalyst() {
  catalyst = new Catalyst();
  catalyst.create();
}

function create_agents(nodes) {
  let agents = [];
  for (let node of nodes) {
    if (node.children.length == 0) {
      create_agent(node);
    } else {
      create_agents(node.children);
    }
  }
  return agents;
}

function create_agent(node) {
  let agent = new Agent(node)
  agents.push(agent);
  total_agent_weight += agent.weight;
}








