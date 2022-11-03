


//Crear espacio de nombre para Engine
const Engine=Matter.Engine;

//Crear espacio de nombre para World
const World=Matter.World;

//Crear espacio de nombre para Bodies
const Bodies=Matter.Bodies;

//Crear espacio de nombre para Body
const Body=Matter.Body;

function setup() {
  createCanvas(400,400);
//crear engine
engine =Engine.create(); 
  //Agregar world a engine
  world=engine.world;
  
  

   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

  
//crear un fondo
//agregarlo a world

  ball = Bodies.circle(100,10,20,ball_options);
  //instruccion para añadir un objeto a nuestro mundo (mundo,Objeto)
  World.add(world,ball);
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
//poner ciertas figuras de manera centrada con el CENTER
  rectMode(CENTER);
//poner para aplicar en obectos circular
  ellipseMode(RADIUS);
}


function draw() //la  function draw vamos a poner las actualizaciones de cada objeto
{
  background(51);

  //actualizacion del motor fisico
  Engine.update(engine);
  
  
//actualizacion del objeto para que se nos muestre nuestro objeto
  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 rect(ground.position.x,ground.position.y,400,20);


  
  
}

