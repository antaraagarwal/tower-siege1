const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var stand1, stand2;
var slingShot;
var hexagon

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

         //stand 1
     block1= new Box(440,305,30,40)
    block2= new Box(470, 305, 30,40)
    block3= new Box(500,305,30,40)
    block4= new Box(530, 305, 30,40)
    block5= new Box(560, 305, 30,40)
    //middle
    block6= new Box(470, 265, 30,40)
    block7= new Box(500, 265, 30,40)
    block8= new Box(530, 265, 30,40)
    //top
    block9= new Box(500,225, 30,40);
    
        //stand2
    //bottom
    block10= new Box(740, 235, 30 ,40)
    block11= new Box(770,235, 30 ,40)
    block12= new Box(800,235, 30 ,40)
    block13= new Box(830,235, 30 ,40)
    block14= new Box(860,235, 30 ,40)
   
    //middle
    block15= new Box(770,195, 30 ,40)
    block16= new Box(800,195, 30 ,40)
    block17= new Box(830, 195, 30 ,40)
    
    //top
    block18= new Box(800,155, 30 ,40)
   

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(500, 305, 170, 10);
    stand2 = new Ground(800,235 , 170, 10)   
    hexagon = new Hexagon(200,50)
    slingshot = new SlingShot(hexagon.body,{x:200, y:50});
}

function draw(){
background=("blue")
 Engine.update(engine);
    text("drag the hexagon, and release it to launch it towrds the blocks.",20, 150)
 
    ground.display();
    hexagon.display();
    stand1.display();
    stand2.display();
    slingshot.display();
        

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
  


}


function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}







