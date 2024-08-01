//your parameter variables go here!
let spirithead_width = 30;
let grass_height = 20;
let totorotummy_width = 70; //fat or slim totoro!
let totorotummy_height = 75; 
let drawspirit = true
let drawleaf = true 
let drawstars = true
let drawgrass = true 
// on line 71: fill(194, 223, 212)

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
background(228, 229, 242); //pastel purple 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

 if (drawspirit == true) {
//spirit
fill(230, 238, 239)
ellipse(134, 130, 8, 30);
fill(230, 238, 239)
ellipse(147, 130, 8, 30);
fill(230, 238, 239)
ellipse(130, 110, 8, 30); 
fill(230, 238, 239)
ellipse(150, 110, 8, 30);
fill(230, 238, 239)
ellipse(140, 109, 20, 35);
fill(230, 238, 239)
ellipse(139, 85, spirithead_width, 28); //spirithead
fill (0, 0, 0);
ellipse(148, 82, 7, 6);
fill (0, 0, 0);
ellipse(130, 82, 6, 7);
fill (0, 0, 0);
ellipse(140, 95, 5, 5);
ellipse( 140, 84, 2, 1);
 }

 if (drawleaf == true) {
//leaf
fill(161, 224, 134);
rect(172, 100, 4, 45);
arc(175, 100, 40, 15, 165, PI + QUARTER_PI, PIE,);
 }
  
 if (drawstars == true) {
  fill(238, 204, 234);
  circle(160, 45, 10);
  fill(244, 243, 216);
  circle(120, 65, 10);
  fill(244, 243, 216);
  circle(30, 45, 10);
 }

 if (drawgrass == true) {
//grass
stroke(127, 158, 110)
fill(194, 223, 212);
rect(0, 140, 200, grass_height);
 }

//totoro
stroke(0, 0, 0)
fill(61, 64, 67);
ellipse(85, 50, 14, 50);
fill(61, 64, 67);
ellipse(55, 130, 17, 25);
fill(61, 64, 67);
ellipse(85, 130, 17, 25);
fill(61, 64, 67);
ellipse(55, 50, 14, 50);
fill(61, 64, 67);
ellipse(70, 80, 55, 80);
//totorotummy
fill(61, 64, 67);
ellipse(70, 100, totorotummy_width, totorotummy_height);
fill(249, 252, 224);
ellipse(70, 104, 60, 60);
fill(255, 255, 255);
ellipse(83, 55, 10, 10);
fill(255, 255, 255);
ellipse(58, 55, 10, 10);
fill(0, 0, 0);
ellipse(83, 55, 3, 3);
fill(0, 0, 0);
ellipse(58, 55, 3, 3);
fill(0, 0, 0);
ellipse(70, 55, 8, 3);
//totoromarks
fill(61, 64, 67); 
arc(55, 85, 10, 8, 165, PI + QUARTER_PI, PIE,);
arc(70, 85, 10, 8, 165, PI + QUARTER_PI, PIE);
arc(85, 85, 10, 8, 165, PI + QUARTER_PI, PIE);
arc(92, 95, 10, 8, 165, PI + QUARTER_PI, PIE);
arc(78, 95, 10, 8, 165, PI + QUARTER_PI, PIE);
arc(64, 95, 10, 8, 165, PI + QUARTER_PI, PIE);
arc(50, 95, 10, 8, 165, PI + QUARTER_PI, PIE);
//totorowhiskers
line(85, 62, 105, 65);
line(85, 62, 105, 60);
line(35, 57, 55, 61);
line(35, 62, 55, 61);

//leaf umbrella
fill(161, 224, 134);
rect(66, 21, 2, 15);
arc(70, 41, 30, 14, 135, PI + QUARTER_PI, PIE,);

}

