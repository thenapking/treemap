// Utility functions

function keyPressed() {
  if(key == "s" || key == "S") {
    saveCanvas("treemap_custom_" + palette_name + "_" + seed, "png");
    return;
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

function initialise_palette(){
  palette_names = Object.keys(palettes);
  palette_name = random(palette_names);
  palette_name = "More Mil2"
  palette = palettes[palette_name];
  palette.colours = shuffle(palette.colours);
  console.log("Palette: " + palette_name);

  // frameRate(10);

  stroke(palette.pen);
  strokeWeight(2)
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


