$(document).ready(function ( ){
    var field = $("#field")[0].getContext('2d');
    var width = $("#field").width();
    var height = $("#field").height();
    var apples = {};
    var box = 20;
    var increase = 0;
    width = width / box;
    height = height / box;
    var player = {};
    
    
    
    
    
    
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
        var currx = player.body[0].x;
        var curry = player.body[0].y; // huhuhuhu Curry  ;)
        //updating coordinates of new box to add to snake
        if(player.direction ==="up") curry++;
        else if (player.direction==="down")curry--;
        else if (player.direction==="right")currx++;
        else if (player.direction==="left")currx--;
        
        var temp_coordinates = {x:currx, y:curry};
        
        //checking if the coordinates are valid
        for(var i in player.body){
            if(temp_coordinates === i){
                alert("Play Again?");
                setup();
                return;
            }
        }
        
        
        if(currx<=-1||currx>=width||curry<=-1||curry>=height){
            alert("Play Again?");
            setup();
            return;
        }
        
        //checking if there is any food 
        if (temp_coordinates === apples){
            increase += increase_size; //this is how many boxes the snake increases by
            player.score++;
            food();
        }
        //painting food
        painter(apples.x,apples.y);
        
        //creating a new body array
        if(increase > 0){
            longer(temp_coordinates);
        }
        else {
            player.body.unshift(temp_coordinates);
            player.body.pop();
        }
        
        
        //testing player body
        for(var i in player.body){
            painter(i.x,i.y)
        }
    }
            
        
        
            
    //function used in making snakes longer when food is eaten
    function longer(a){
        player.body.unshift(a);
        increase--;
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
        player = new Snake('black');
        //initializing the body of the snake
        for (var c = player.length - 1; c >= 0; c--){
            player.body.push({x:0,y:c});
        }
        food();
        setInterval(repeat, 60);
    }
    
    setup();

    //controls mapping
    $(document).keydown(function(stuff){
        var key = stuff.which;
        if((key === "40" || key === "83") && player.direction !== "up") player.direction = "down";
        else if((key === "39" || key === "68") && player.direction !== "left") player.direction = "right";
        else if((key === "38" || key === "87") && player.direction !== "down") player.direction = "up";
        else if((key === "37" || key ==="65") && player.direction !== "right") player.direction = "left";
    });
        
        
          
        
});
        
        
        
        
                    
        
    
   
    
    
    
        
        
