var Snake = function (color, direction) {
    //basic properties of a snake
    var id;
    return {
        direction: direction,
        score: 0,
        color: color,
        length: 5,
        body: []
        id: id
    }
    
    /*
    if(direction == "down") {
        for (var c = this.length - 1 + starty; c >= starty; c--){
            player.body.push({x:startx,y:c});
        }
    }
    if(direction == "up") {
        for (var c = starty - (this.length - 1); c <= starty; c++){
            player2.body.push({x:(startx),y:(c)});
        }
    }
    */
};

exports.Player = Snake;