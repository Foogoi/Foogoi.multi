$(document).ready(function ( ){
    var field = $("#field")[0].getContext('2d');
    var width = $("#field").width();
    var height = $("#field").height();
    var apples = {};
    var box = 20;
    var increase = 0;
    var increase_size = 3;
    width = width / box;
    height = height / box;
    var player = {};
    var curry = 0;
    var currx = 0;
    var speed = 150;
    
    
    
    
    
    //snake "class"
    function Snake(color) {
        //basic properties of a snake
        this.direction = "down";
        this.score = 0;
        this.color = color;
        this.length = 5; 
        this.body = [];
        
    }
    
    //food maker
    function food () {
        apples = {x:Math.round((width - 1)*Math.random()), y:Math.round((height-1)*Math.random())}
    }
    
    //function that repeats and paints stuff
    function repeat() {
        //Canvas
        
        field.fillRect(0,0,width*box,height*box);
        field.fillStyle="white";
        field.strokeStyle="black";
        field.strokeRect(0,0,width*box,height*box);
        //snake mov't
        currx = player.body[0].x;
        curry = player.body[0].y; // huhuhuhu Curry  ;)
        //updating coordinates of new box to add to snake
        
        //document.write("    " + curry); // switched the ++ and  --
        if(player.direction ==="up") curry--;
        else if (player.direction==="down")curry++;
        else if (player.direction==="right")currx++;
        else if (player.direction==="left")currx--;
        
        var temp_coordinates = {x:currx, y:curry};
        
        //checking if the coordinates are valid
        for(var stiven = 0; stiven < player.length; stiven++){
            if(temp_coordinates.x == player.body[stiven].x && temp_coordinates.y == player.body[stiven].y){
                reset();
                return;
            }
        }
        
        
        if(currx<=-1||currx>=width||curry<=-1||curry>=height){
            reset();
            return;
        }
        
        //checking if there is any food 
        if (temp_coordinates.x == apples.x && temp_coordinates.y == apples.y){
            increase += increase_size; //this is how many boxes the snake increases by
            player.score++;
            player.length++;
            food();
        }
        //painting food
        painter(apples.x,apples.y);
        
        
        player.body.unshift(temp_coordinates);
        
        
        //keeping or disposing of last box in the snake's body
        if(increase <= 0){
            player.body.pop();
        }
        else {
            increase--;
        }
         
        
        
        //painting  player body
        for(var steven = 0; steven < player.length; steven++){
            painter(player.body[steven].x,player.body[steven].y);
        }
        
        //score
        field.fillStyle="black";
        field.font="20px Georgia";
        field.fillText("Score: " + player.score,5,height*box-5);
        field.fillStyle="white";

    }
            
        
        
            
    //reset function
    
    function reset(){
        alert("Play Again?");
        setup();
        return;
    }
        
    
    //mini painting function
    function painter(coorx, coory){
        field.fillStyle="black"; // make this player.color later
        field.strokeStyle="white";
        field.fillRect(coorx*box,coory*box,box,box);
        field.strokeRect(coorx*box,coory*box,box,box);
        field.fillStyle="white"; // make this player.color later
        field.strokeStyle="black";
    }

    
    function setup () {
        clearInterval(myVar);
        player = new Snake('black');
        //initializing the body of the snake
        for (var c = player.length - 1; c >= 0; c--){
            player.body.push({x:1,y:c});
        }
        food();
        var myVar = setInterval(function(){ repeat() }, speed);
        myVar;
    }
    
    setup();

    //controls mapping
    $(document).keydown(function(stuff){
        var key = stuff.which;
        if((key == "40" || key == "83") && player.direction !== "up") player.direction = "down";
        else if((key == "39" || key == "68") && player.direction !== "left") player.direction = "right";
        else if((key == "38" || key == "87") && player.direction !== "down") player.direction = "up";
        else if((key == "37" || key =="65") && player.direction !== "right") player.direction = "left";
    });
        
        
          
        
});
        
        
        
        
                    
        
    
   
    
    
    
        
        