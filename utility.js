// Utility functions

function keyPressed() {
  if(key == "s" || key == "S") {
    saveCanvas("treemap_custom_" + palette_name + "_" + SEED, "png");
    return;
  }

  if(key == "h" || key == "H") {
    draw_hatched();
  }

  if (key === "-" || key === "=") {
    change_palette(key);
    return;
  }
}

function mousePressed() {
  let x = mouseX - BW;
  let y = mouseY - BW;
  let v = createVector(x, y);

  let nearest = nearest_agent(v);

  console.log(nearest);
}

function doubleClicked() {
  let x = mouseX - BW;
  let y = mouseY - BW;
  let v = createVector(x, y);

  let nearest = nearest_agent(v);

  if(nearest == null) { return }
  
  nearest.state = 1;

  redraw();
}

function nearest_agent(v){
  let nearest_dist = Infinity;
  let nearest = null
  for(let agent of agents){
    let d = v.dist(agent.position);
    if(d < nearest_dist) {
      nearest_dist = d;
      nearest = agent;
    }
  }

  return nearest;
}

let blank;
function initialise_palette(){
  palette_names = Object.keys(palettes);
  palette_name = random(palette_names);
  palette_name = "Basic"
  palette = palettes[palette_name];
  palette.colours = shuffle(palette.colours);
  console.log("Palette: " + palette_name);

  // frameRate(10);
  blank = color(palette.blank);

  stroke(palette.pen);
  noFill();
}

function change_palette(key) {
  let idx = palette_names.indexOf(palette_name);
  idx += key === "=" ? 1 : -1;
  idx = constrain(idx, 0, palette_names.length - 1);

  palette_name = palette_names[idx];
  palette = palettes[palette_name];
  console.log("Changed palette to " + palette_name);
  redraw();
}

function set_params(){
  const params = new URLSearchParams(window.location.search);

  SEED = params.get("seed");
  SEED = SEED == null ? floor(random(1000000)) : int(SEED);
  REWIRING_PROBABILITY = params.get("rewiring");
  REWIRING_PROBABILITY = REWIRING_PROBABILITY == null ? random([0,4]) : float(REWIRING_PROBABILITY);
  randomSeed(SEED);
  noiseSeed(SEED);

  let max_side_ratio = REWIRING_PROBABILITY > 0 ? 0.1 : 0.2;
  let min_side_ratio = REWIRING_PROBABILITY > 0 ? 0.005 : 0.0075;
  
  MAX_SIDE = random(0.075, max_side_ratio) * H;
  MIN_SIDE = random(min_side_ratio, 0.0075) * W;
  console.log("Seed = " + SEED);
  console.log("Rewiring Probability = " + REWIRING_PROBABILITY);
  // console.log("Max Size = " + MAX_SIDE);

  

}

