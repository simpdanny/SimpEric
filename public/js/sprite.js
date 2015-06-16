function Sprite(canvas, x , y, img) {
    var DIRECTION = { "down":0 , "left":1 , "right":2, "up":3 };
    var FRAME_PER_STAGE = 15;
    var MAX_MOVE_STAGE = 4 * FRAME_PER_STAGE;
    var self = this;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.isMoving = false;
    this.animHandle = null;
    this.fWidth = 32;
    this.fHeight = 32;
    this.currentStage = 0;
    this.currentDirection = "down";
    this.getFramePosition = function( direction , stage ) {
	var pos =  [ self.fWidth * ( (( Math.floor(stage/ FRAME_PER_STAGE ) + 1) % 3))  , self.fHeight * DIRECTION[direction] ];	
	//console.log( "getFramePosition( " + direction + " , " + stage + " ) " );
	//console.log( "    ->    return: " + pos[0] + " , " + pos[1] );
	return pos;
    };
    this.stop = function() {
	self.currentStage = 0;
	self.isMoving = false;
    };
    this.start = function() {
        self.isMoving = true;
    };
    this.changeDirection = function(direction) {
	self.currentDirection = direction; 
    };
    this.increment = function( incre ) {
	if ( self.isMoving == false ) {
	    return;
	}
	switch ( self.currentDirection ) {
	    case "down" :
		self.y += incre * self.speed;
		if ( self.y >= self.canvas.height ){
		    self.y = self.canvas.height - 1;
		}
		break;
	    case "up" :
		self.y -= incre* self.speed;
		if ( self.y < 0 ) {
		    self.y = 0;
		}
		break;
	    case "right":
		self.x += incre * self.speed;
		if ( self.x >= self.canvas.width ) {
		    self.x = self.canvas.width - 1;
		}
		break;
	    case "left" :
		self.x -= incre * self.speed;
		if ( self.x < 0) {
		    self.x = 0;
		}
		break;
	    default:
		break;
	}
	self.currentStage += incre;
	if ( self.currentStage >= MAX_MOVE_STAGE ) {
	    self.currentStage = self.currentStage % MAX_MOVE_STAGE;
	}
	
    };
    this.draw = function( ) {
	self.context.save();
	var img_pos = self.getFramePosition( self.currentDirection , self.currentStage );
	self.context.drawImage(self.img, img_pos[0], img_pos[1] , 
			       self.fWidth, self.fHeight,
			       self.x - self.fWidth  , self.y - self.fHeight  ,
			       self.fWidth * 2, self.fHeight * 2 );
	self.context.restore(); 
    };
} 

