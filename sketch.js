const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() 
{
    backgroundImg = loadImage("sprites/bg.png");
}

function setup()
{
      var canvas = createCanvas(1200,400);
      //create engine
      engine = Engine.create();
      world = engine.world;
        
      //create ground
        ground= new Ground(600,400,1200,20);
        ground1= new Ground(200,300,400,200);
        ground2= new Ground(1000,300,400,200);

        //create box or b 
        b1= new Ground(390,190,20,20);
        b3= new Ground(370,120,20,150);
        b2= new Ground(810,190,20,20);
        b4= new Ground(830,120,20,150);

        //create birds
        bird1=new Bird(1000,200,50);
        bird2=new Bird(450,200,50);
        bird3=new Bird(530,200,50);
        bird4=new Bird(550,200,50);

        //create  balls
        ball1=new Bird(480,-50,10);
  
        ball3=new Bird(430,-100,10);
        
        ball5=new Bird(460,-50,10);
        
        //make chain 1 option
      var options=
      {
          bodyA : bird1.body,
            bodyB : b1.body,
            stiffness : 0,
            length : 80
      }
      
      //create chain
      var chain=Constraint.create(options);
      World.add(world,chain);

      //make chain 2 option
      var option=
      {
          bodyA : bird1.body,
            bodyB : bird2.body,
            stiffness : 0,
            length : 90
      }
      //create chain
  
      var chain1=Constraint.create(option);
      World.add(world,chain1);

      //make chain 2 option
      var otion=
      {
          bodyA : bird2.body,
            bodyB : bird3.body,
            stiffness : 0,
            length : 90
      }

      //create chain
      var chain2=Constraint.create(otion);
      World.add(world,chain2);

      //make chain 3 option
      var ption=
      {
          bodyA : bird3.body,
            bodyB : bird4.body,
            stiffness : 0,
            length : 90
      }

      //create chain
      var chain3=Constraint.create(ption);
      World.add(world,chain3);

      //make chain 3 option
      var tion=
      {
          bodyA : b2.body,
            bodyB : bird4.body,
            stiffness : 0,
            length : 90
      }

      //create chain
      var chain3=Constraint.create(tion);
      World.add(world,chain3);


 
    

}

function draw()
{
      background(backgroundImg);
      Engine.update(engine);

     // playSound("sprites/PUBG.mp3");
      
      //display ground class objects
      ground.display();
      ground1.display();
      ground2.display();
      b1.display();   
      b2.display();  
      b3.display();
      b4.display();

      //display all balls
      ball1.display();
    
      ball3.display();
      
      ball5.display();

      //display bird class objects
      bird1.display();
      bird2.display();
      bird3.display();
      bird4.display();

      //display all lines
      line(bird1.body.position.x,bird1.body.position.y,b1.body.position.x,b1.body.position.y);
      line(bird1.body.position.x,bird1.body.position.y,bird2.body.position.x,bird2.body.position.y);
      line(bird3.body.position.x,bird3.body.position.y,bird2.body.position.x,bird2.body.position.y);
      line(bird3.body.position.x,bird3.body.position.y,bird4.body.position.x,bird4.body.position.y);
      line(bird4.body.position.x,bird4.body.position.y,b2.body.position.x,b2.body.position.y);
      
}
