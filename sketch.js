var bgImage;
var SantaReindeers;
var Angels;
var Frosty;
var Elf;
var DrummerBoy;
var Scrooge;
var snow;

function preload(){
  bgImage = loadImage("snow2.jpg");
  SantaReindeersImg = loadImage("Santa and his reindeers.png");
  AngelsImg = loadImage("christmas angel.png");
  FrostyImg = loadImage("frosty the snowman.png");
  ElfImg = loadImage("christmas elf.png");
  DrummerBoyImg = loadImage("little drummer boy.png");
  ScroogeImg = loadImage("Scrooge.png");
  snowImg = loadImage("snow4.webp")
}

function setup() {
  createCanvas(900,550);
  //createSprite(400, 200, 50, 50);
  SantaReindeers = createSprite(230,150);
  SantaReindeers.addImage(SantaReindeersImg);
  SantaReindeers.scale = 1.5;

  Angels = createSprite(630,90);
  Angels.addImage(AngelsImg);
  Angels.scale = 0.9;

  Frosty = createSprite(760,500);
  Frosty.addImage(FrostyImg);
  Frosty.scale = 0.5;

  Elf = createSprite(120,500);
  Elf.addImage(ElfImg);
  Elf.scale = 0.5;

  DrummerBoy = createSprite(320,510);
  DrummerBoy.addImage(DrummerBoyImg);
  DrummerBoy.scale = 0.5;

  Scrooge = createSprite(545,420);
  Scrooge.addImage(ScroogeImg);
  Scrooge.scale = 0.4;

  snow = createSprite(850,200);
  snow.addImage(snowImg);
  snow.scale = 0.15;
}

function draw() {
  //background(255,255,255);  
  background(bgImage);

    //create snow
    //if(frameCount%60===0){
      //snow.push(new snow(random(width/2-30, width/2+30), 10,10));
    //}
  
    //display snow
    //for (var j = 0; j < snow.length; j++) {
    //snow[j].display();
    //}
  drawSprites();
}