//Sky
background(219, 255, 255);

//Rooftop
fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

//HouseColorOriginal
fill(255, 255, 255);
rect(60, 150, 280, 207);

// House Brick For-Loop: Inserted before door is drawn
for (var column = 1; column < 6; column++) {
    for (var row = 3; row < 8; row++){
        var columnZ = column * 55;
        var rowY = row * 40;
        image(getImage("cute/StoneBlock"), columnZ, rowY, 73, 87);
    }
}
   
//Door
fill(120, 80, 19);
rect(180, 280, 40, 77);


//Windows
for(var x = 1; x < 5; x++){
    var windowX = x * 72;
    image(getImage("cute/WindowTall"), windowX, 168, 44, 66);
}
//Grass
for(var grass = 0; grass <336; grass+= 67){
    var grassY = grass;
    if(grassY % 2 === 0){
        fill(255, 3, 3);
    }else{
        fill(0, 0, 0);
    }
    rect(grassY, 350, 85, 34);
    image(getImage("cute/GrassBlock"), grassY, 338, 67, 62);
}
//Flowers
for (var flowers = 0; flowers < 330; flowers++){
    var flowersZ = flowers * 117;
    image(getImage("cute/TreeShort"), flowersZ, 306, 50, 85);
}


