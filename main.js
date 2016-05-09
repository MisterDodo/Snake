function setup(){
  createCanvas(400, 400);
}
var round = Math.round;
var random = function(min,max){
    return Math.random() * (max - min) + min;
    
};
var failure = 0;
var deltaX = 10;
var deltaY = 0;
var ticks = 0;
var lineXOne = 10;
var lineXTwo = 10;
var lineYOne = 10;
var lineYTwo = 10
var darkness = 25;
var blessing = {x:round(random(1,39))*10,y:round(random(1,39))*10};
var howBlessed = 0;
var companionship =0;
var wealth =0;
var paused =0;
var wall = {x:0,y:0};

var walls = [{x:wall.x + round(random(0,20))*20,y:wall.y + round(random(0,20))*20},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
{x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10},
];
//theSnake
var snake = [
    {
        x: 0,
        y: 0
    },{
        x: deltaX,
        y: deltaY,
        
    },{
        x: deltaX * 2,
        y: deltaY * 2,
        
    }];
    
 
var food = {x:round(random(0,39))*10,y:round(random(0,39))*10};
var drawBlessing = function(){
    fill(169, 230, 232,random(180,255));
        rect(blessing.x,blessing.y,10,10);
    if (snake[0].x === blessing.x && snake[0].y === blessing.y) {
        blessing.x = round(random(0,39))*10;
        blessing.y = round(random(0,39))*10;
        walls.shift(0);
        walls.shift(1);
        walls.shift(2);
        walls.shift(3);
        howBlessed += 1;
    }
};
var drawWalls = function(){
    fill(random(155,255), 0, 0);
    for (var i = 0; i < walls.length;i++){
        rect(walls[i].x,walls[i].y, 10, 10);
        
    }
    
};
var drawFood = function(){
    fill(0, 0, 0,random(100,255));
    rect(food.x,food.y,10,10);
    if (darkness >= 255){failure = 2;}
    
};
var checkWallCollision = function(){
        for (var i = 0; i < walls.length; i+=1) {
        if(snake[0].x === walls[i].x && snake[0].y === walls[i].y){
         failure = 1;   
        }
    }
};

var checkFoodCollision = function(){
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.x = round(random(0,39))*10;
        food.y = round(random(0,39))*10;
        darkness += 5;
        snake.push({
            x:snake[snake.length-1].x+ deltaX,
            y:snake[snake.length-1].y+ deltaY
        });
        walls.push({x:wall.x + round(random(0,39))*10,y:wall.y + round(random(1,39))*10});
    }
};

var snakeMovement = function(){
        if (keyIsPressed && keyCode === LEFT_ARROW) {
        deltaX = -10; deltaY = 0;
    }    
    if (keyIsPressed && keyCode === RIGHT_ARROW) {
        deltaX = 10; deltaY = 0;
    }    
     if (keyIsPressed && keyCode === UP_ARROW) {
        deltaY = -10; deltaX = 0;
    }  
     if (keyIsPressed && keyCode === DOWN_ARROW) {
        deltaY = 10; deltaX = 0;
    }  
    
    if(snake[0].x === -10 || snake[0].x === 400 || snake[0].y === -10 || snake[0].y === 400){
        failure = 1;
    }
};
var snakeCheckCollision = function(snake1,snake2){
  return snake1.x === snake2.x &&  snake1.y === snake2.y;
};

var drawSnake = function(){
    background(255, 255, 255);
     noStroke();
   
    
    
    while (lineXOne < 400 && lineXTwo < 400){
        line(lineXOne, 0, lineXTwo, 400);
        lineXOne = lineXOne + 10;
        lineXTwo = lineXTwo + 10;
    }
    lineXOne = 0;
    lineXTwo = 0;
    
        while (lineYOne < 400 && lineYTwo < 400){
        line(0, lineYOne, 400, lineYTwo);
        lineYOne = lineYOne + 10;
        lineYTwo = lineYTwo + 10;
    }
    lineYOne = 0;
    lineYTwo = 0;
    
    line(410,399,1,399); 
    line(399,410,399,1);
    
    strokeWeight(1);
    fill(0, 0, 0,darkness);
   
    for (var i = 0; i < snake.length;i++){
        rect(snake[i].x,snake[i].y, 10, 10);
        
    }
    

    
    if(snake[0].x === -10 || snake[0].x === 400 || snake[0].y === -10 || snake[0].y === 400){
        failure = 1;
    }
    
   
    
    //for (var j = 1; j < snake.length; j++) {
        //if(snakeCheckCollision(snake[0], snake[j])){
            //failure = 1;   
        //}
    //}
    

    
    
    
   snake.unshift ({x:snake[0].x+ deltaX,y:snake[0].y+ deltaY});
    snake.pop();
    
   
   
  
}; 
 var outline = function() {
    line(0,0,0,400)
 };
draw = function() {
    outline();
    snakeMovement();
    var speed = 4;
    
    
    ticks += 1;
    if (ticks % speed === 0) { 
       
       
        noStroke();
        drawSnake(); 
        drawFood();
        drawWalls();
        drawBlessing();
        checkFoodCollision();
        checkWallCollision();
        
        
    }
            if(paused === 1){
            speed = 100;
        }
        //if(paused === 0&&keyIsPressed&&keyCode === SHIFT){
            //paused = 1;
        //}
        //if(paused === 1&&keyIsPressed&&keyCode === SHIFT){
            //paused = 0;
        //}

    if(failure === 1){
        fill(random(100,155),0,0);
        rect(0,0,400,400);
        fill(random(100,220),0,0);
        textSize(14);
        text("YOU HAVE LOST YOUR WAY",106,201,199,62);
    }
    if(failure === 2){
        fill(20, 20, 20);
        rect(0,0,400,400);
        fill(100, 100, 0,random(100,220));
        textSize(12);
        text("You made it, You forgot someone.",111,197,199,62);
    }
        if(howBlessed >= 6){
        fill(169, 200, random(200,255));
        rect(0,0,400,400);
        fill(214, 217, 176);
        textSize(13);
        text("YOU HAVE BEEN FORSAKEN",115,201,199,62);
    }
};