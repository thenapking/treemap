let palettes = {
  "Basic": {
    paper: "#F1F0F2",
    pen: "#FFFFFF",
    blank: "#EEEEEE",
    colours: ["#D7312E","#ECE3D0","#F0AC00","#0C7E45","#2C52A0","#F7BAB6","#5EC5EE","#1D1D1B"]
  },

  "Black": {
    paper: "#000000",
    pen: "#FFFFFF",
    blank: "#111111",
    colours: ["#FCFBFD","#F5B62C","#266951","#D21017","#2B4F93"]
  },

  "Cream BG": {
    paper: "#F6E9DF",
    pen: "#FFFFFF",
    blank: "#F8EAE1",
    colours: ["#BE1340","#F9AF1C","#3272BD","#F2A299","#6D8049","#193541","#229BB9"]
  },

  "Playful": {
    paper: "#FCF2F0",
    pen: "#FCF2F0",
    blank: "#EEE7E6",
    colours: ["#DD1B1C","#2C8F3D","#FFA21E","#1B4D8C","#8EC8EC","#229BB9","#31456A","#FFABA2"]
  },

  "Pink BG": {
    paper: "#FFC2C9",
    pen: "#FCF2F0",
    blank: "#FFC2C9",
    colours: ["#293F92","#FFFFFF","#8EC8EC","#BE1340","#457E55","#F9B815","#ED4404","#2E2A40"]
  },

  "Yellow BG": {
    paper: "#FFC907",
    pen: "#FFFFFF",
    blank: "#FFC907",
    colours: ["#8EC8EC","#5272BD","#FFABA2","#DD1B1C","#2C8F3D","#F07500","#F9B815","#3C352E"]
  },

  "Primrose BG": {
    paper: "#FFCE79",
    pen: "#FFFFFF",
    blank: "#FFCE79",
    colours: ["#193541","#9FC9E4","#6D8049","#22629D","#F9B815","#FFCE79","#A62A4F","#ED4404","#FFFFFF"]
  },

  "Sandy": {
    paper: "#F3D19F",
    pen: "#FFFFFF",
    blank: "#F3D19F",
    colours: ["#9FC9E4","#22629D","#A62A4F","#2D2D2D","#F2F0F0","#F34723","#7F865C","#F9AF1C"]
  },

  "Palette 9": {
    paper: "#245590",
    pen: "#EB1C9",
    blank: "#245590",
    colours: ["#8EC8EC","#116356","#A62A4F","#F9AF1C","#FDF0D5","#0D1929"]
  },

  "Primary": {
    paper: "#F7F2F2",
    pen: "#FFFFFF",
    blank: "#F2F0F0",
    colours: ["#293F92","#DD1B1C","#F9AF1C","#0F63B3","#2D2D2D","#F8BCC8","#116356"]
  },

  "Military Millinary": {
    paper: "#ececec",
    pen: "#FFFFFF",
    blank: "#ececec",
    colours: ["#dcd8d8","#e94730","#307eca","#232b45","#F9AF1C"],
  },

  "Military Millinar2": {
    paper: "#F7F2EF",
    pen: "#FFFFFF",
    blank: "#F7F2EF",
    colours: ["#e94730","#232b45","#FFABA2","#8EC8EC","#F9AF1C"]
  },

  "More Mil":{
    paper: "#c7ccd2",
    pen: "#ffffff",
    blank: "#c7ccd2",
    colours: ["3c49b6","#f2a35d","# 8e96bd","#e05c1e","#e26b1d","#2e3c8e","#c8cdd1","#1f1f1f"]
  },

  "More Mil2": {
    paper: "#C8CDD1",
    pen: "#ffffff",
    blank: "#C7CCD2",
    colours: ["#1f1f1f","#003A11","#E94730","#F9B815","#245590","#8EC8EC"]
  },

  
 
};


let colourBank = [
  "#F9AF1C","#0D2529","#FFFFFF","#FFA21E","#22629D","#F07500","#343549",
  "#F5E8D7","#000000","#BE1340","#F8ECE7","#F77331","#ED4404","#3B4552",
  "#0D1929","#003049","#F7F2EF","#2E2A40","#F5F5F7","#253B56","#E6EAEE",
  "#193541","#F5F3EE","#31456A","#FF9833","#08142C","#FFABA2","#1E3049",
  "#FDF0D5","#2E3F47","#FBF4D7","#32404A","#F4D8B9","#F6E9DF","#86999D",
  "#F5E6C5","#8399B4","#CDDBE8","#A62A4F","#229BB9","#77C4D1","#65C3CF",
  "#DD1B1C","#40A5AF","#FDFAEB","#6D8049","#F7EECD","#7F865C","#FDFDF8",
  "#B5D6C5","#D75931","#A9B6A4","#F9B815","#B8C4C2","#FFC907","#FAF3E2",
  "#457E55","#FDF0DD","#2C8F3D","#EEC219","#003A11","#E2EDBB","#3A5970",
  "#F1F0F2","#293F92","#F2F0F0","#FCF2F0","#3272BD","#F7F2F2","#1C6AA8",
  "#F3E3BF","#8EC8EC","#201C59","#CA996D","#3C352E","#A67B56","#F6DEE2",
  "#282522","#F2A299","#F8BCC8","#FAF3E9","#FFC2C9","#1B4D8C","#FCE0C4",
  "#19141B","#F7E5C0","#1D1812","#FFFEF0","#2D2D2D","#FFF8F5","#F8F4F9",
  "#EEE7E6","#245590","#F7ECE4","#5272BD", 
  "#F6F7ED", "#FFDF4F", "#0F63B3", "#003A6C", "#ACDFDD", // MINDFUL 268
  "#F6F4EC", "#F3d19f", "#ADB6AC", "#C74375", "#9E194D", "#1D2951", // MINDFUL 266
  "#F6F4F1", "#EB1C9", "#AEC3C4", "#F34723", "#841B2D", "#0A2538", // MINDFUL 265
  "#FFF5EE", "#C3DCD5", "#EC7A93", "#FFCE79", "#116356", "#02273A", // MINDFUL 262
  "#F6F4F5", "#A8B1D7", "#ECBCB2", "#EAAA62", "#051040", "#922724", // MINDFUL 254
  "#F2F2ED", "#FADE79", "#E56824", "#9FC9E4", "#1C2E63", "#051040", // MINDFUL 217
  "#dcd8d8","#e94730","#307eca","#232b45","#F9AF1C", "#ececec",
  "3c49b6","#f2a35d","# 8e96bd","#e05c1e","#e26b1d","#2e3c8e","#c8cdd1","#1f1f1f", "#c7ccd2"
 

];


let old_palettes = {
  "Pumpkin": {bg: "#F9AF1C", strength: "1", pen: "#0D2529", other_pen: "#FFFFFF" },
  "Gola": {bg: "#FFA21E", strength: "3", pen:"#22629D", other_pen: "#FFFFFF" },
  "Almond BG": { bg: "#F07500", strength: "1", pen:"#343549", other_pen: "#FFFFFF" },
  "Pumpkin II": {bg: "#F9AF1C", strength: "1", pen: "#F5E8D7", other_pen: "#000000" },
  "Cherry": {bg: "#BE1340", strength: "1", pen: "#F8ECE7", other_pen: "#000000"},
  "Burnt Orange": {bg: "#F77331", strength: "2.5", pen: "#F8ECE7", other_pen: "#000000"},
  "Console II":{bg: "#ED4404", strength: "1", pen: "#3B4552", other_pen: "#FFFFFF" },
  "Nightshade": {bg: "#0D1929", strength: "3", pen: "#FFFFFF", other_pen: "#000000"},
  "Monochrome": {bg: "#000000", strength: "2", pen: "#FFFFFF", other_pen: "#000000"},
  "Whale": {bg: "#003049", strength: "3", pen: "#F7F2EF", other_pen: "#000000"},
  "Light Smoke": {bg: "#2E2A40", strength: "2", pen: "#F5F5F7", other_pen: "#000000"},
  "Grind Blue Grey":{bg: "#253B56", strength: "3", pen: "#E6EAEE", other_pen: "#000000" },
  "Neutral": {bg: "#193541", strength: "3", pen: "#F5F3EE", other_pen: "#000000"},
  "Fire": {bg: "#31456A", strength: "1", pen: "#FF9833", other_pen: "#000000" },
  "Pink Dusk Inverse": {bg: "#08142C", strength: "2", pen: "#ffaba2", other_pen: "#000000"},
  "Prussian": {bg: "#1E3049", strength: "3", pen: "#FDF0D5", other_pen: "#000000"},
  "Computer Manual": {bg: "#2E3F47", strength: "2", pen: "#FBF4D7", other_pen: "#000000"},
  "Hand Bill": {bg: "#32404A", strength: "3", pen: "#F4D8B9", other_pen: "#000000"},
  "Almond": {bg: "#343549", strength: "2", pen: "#F6E9DF", other_pen: "#000000"},
  "Military Grey": {bg: "#86999D", strength: "2", pen: "#F5E6C5", other_pen: "#000000"},
  "Console": {bg: "#8399b4", strength: "3", pen: "#FFFFFF", other_pen: "#000000"},
  "Warm Grey": {bg: "#CDDBE8", strength: "2", pen: "#A62A4F", other_pen: "#FFFFFF"},
  "Vosper": {bg: "#229bb9", strength: "2", pen: "#FFFFFF", other_pen: "#000000"},
  "Vosper Inverse": {bg: "#77C4D1", strength: "1", pen: "#FFFFFF", other_pen: "#000000"},
  "Hi Contrast": {bg: "#65C3CF", strength: "2", pen: "#DD1B1C", other_pen: "#FFFFFF" },
  "Dream Building": {bg: "#40A5AF", strength: "3", pen: "#FDFAEB", other_pen: "#000000"},
  "KPM": {bg: "#6D8049", strength: "3", pen: "#F7EECD", other_pen: "#000000"},
  "Aesop Green":{bg: "#7F865C", strength: "3", pen: "#FDFDF8", other_pen: "#000000" },
  "West Coast": {bg: "#B5D6C5", strength: "2", pen: "#D75931", other_pen: "#FFFFFF"},
  "Grey Grass and Pumpkin": {bg: "#A9B6A4", strength: "2", pen: "#f9b815", other_pen: "#000000"},
  "Engraved Limestone":{bg: "#b8c4c2", strength: "3", pen: "#ffc907", other_pen: "#000000" },
  "Grey Grass": {bg: "#A9B6A4", strength: "2", pen: "#FAF3E2", other_pen: "#000000"},
  "Garden Catalogue": {bg:"#457E55", strength: "2", pen: "#FDF0DD", other_pen: "#000000" },
  "Brazil": {bg: "#2C8F3D", strength: "2", pen: "#EEC219", other_pen: "#000000" },
  "System I":{bg: "#003A11", strength: "3", pen: "#E2EDBB", other_pen: "#000000" },
  "Seashell": {bg: "#3A5970", strength: "2", pen: "#F1F0F2", other_pen: "#000000"},
  "Porcelain": {bg: "#293F92", strength: "3", pen: "#F2F0F0", other_pen: "#000000"},
  "Lavender": {bg: "#22629D", strength: "2", pen: "#FCF2F0", other_pen: "#000000"},
  "Lara": {bg: "#3272BD", strength: "2", pen: "#F7F2F2", other_pen: "#000000"},
  "Sandy Pool": {bg: "#1C6AA8", strength: "2", pen: "#F3E3BF", other_pen: "#000000"},
  "Cornflour": {bg: "#8EC8EC", strength: "2", pen: "#201C59", other_pen: "#FFFFFF"},
  "Grind Caramel":{bg: "#CA996D", strength: "3", pen: "#3C352E", other_pen: "#FFFFFF"}, 
  "Caffeine":{bg: "#a67b56", strength: "3", pen: "#ffffff", other_pen: "#000000" },
  "Grind":{bg: "#F6DEE2", strength: "3", pen: "#282522", other_pen: "#FFFFFF" },
  "Pink Dusk": {bg: "#F2A299", strength: "2", pen: "#08142C", other_pen: "#FFFFFF"},
  "Candy Floss": {bg: "#F8BCC8", strength: "1", pen: "#FAF3E9", other_pen: "#000000" },
  "Boy Girl": {bg: "#FFC2C9", strength: "3", pen: "#1B4D8C", other_pen: "#FFFFFF"},
  "Dairy": {bg: "#FCE0C4", strength: "2", pen: "#19141B", other_pen: "#FFFFFF"},
  "Aesop":{bg: "#F7E5C0", strength: "3", pen: "#1D1812", other_pen: "#FFFFFF" },
  "Almond Paper": {bg: "#F6E9DF", strength: "2", pen: "#343549", other_pen: "#FFFFFF"},
  "Prussian Ink": {bg: "#FDF0D5", strength: "2", pen: "#1E3049", other_pen: "#FFFFFF"},
  "Cosmetics":{bg: "#FFFEF0", strength: "3", pen: "#2D2D2D", other_pen: "#FFFFFF" },
  "Japanese": {bg: "#FFF8F5", strength: "1", pen: "#193541", other_pen: "#FFFFFF"},
  "Whale Ink": {bg: "#F7F2EF", strength: "1", pen: "#003049", other_pen: "#FFFFFF"},
  "Light Smoke Ink": {bg: "#F5F5F7", strength: "1", pen: "#2E2A40", other_pen: "#FFFFFF"},
  "Lavender Ink": {bg: "#FCF2F0", strength: "1", pen: "#22629D", other_pen: "#FFFFFF"},
  "Lara Ink": {bg: "#F7F2F2", strength: "1", pen: "#3272BD", other_pen: "#FFFFFF"},
  "Navy Ink": {bg: "#F8F4F9", strength: "2.5", pen: "#293F92", other_pen: "#FFFFFF"},
  "Neutral Ink": {bg: "#F5F3EE", strength: "1", pen: "#193541", other_pen: "#FFFFFF"},
  "Harbour": {bg: "#EEE7E6", strength: "2", pen: "#245590", other_pen: "#FFFFFF"},
  "Soft Peach": {bg: "#F7ECE4", strength: "2", pen: "#5272BD", other_pen: "#FFFFFF"},
  "Seashell Ink": {bg: "#F1F0F2", strength: "2", pen: "#3A5970", other_pen: "#FFFFFF"},
  "Light Cherry": {bg: "#F8ECE7", strength: "2.5", pen: "#BE1340", other_pen: "#FFFFFF"},
  "Burnt Orange Ink": {bg: "#F8ECE7", strength: "2.5", pen: "#F77331", other_pen: "#FFFFFF"}
};
