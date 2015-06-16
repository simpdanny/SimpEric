var Glass = {
    bind:function( img, ratio ) {
        var self = this;
	//console.log("binding:");
	//console.log( img );
        this.canvas = document.getElementById("glass") ;
        this.canvas.style.display= "none";
        //this.canvas.style.position= "absolute";
        this.context = this.canvas.getContext("2d");
        this.canvas.width = 300;
        this.canvas.height = 300;
        this.img = img;
	this.ratio = ratio | 2; // default == 2
	self.img.onmousedown = function( e ) {
	    if ( e.srcElement != img ) {
		return;
	    }
	    e.preventDefault();
	    draw(e);
	    self.img.onmousemove = draw;
	    self.img.onmouseup = function() {
		self.hide();
		self.img.onmousemove = null;
	    };
	    function draw(ev) {
		var x = ev.pageX, y = ev.pageY;
		console.log(self.img);
		var x_img = x - self.img.x,
		    y_img = y - self.img.y;
		var len = 150 / self.ratio;
	        console.log( " ( pageX , pageY ) = ( " + x + " , " + y + " )");
	        console.log( " (     X ,     Y ) = ( " + x_img + " , " + y_img + " )");
		
		self.copyImg( x_img - len , y_img - len , len *2 , len* 2 );
		self.show( x - 150 , y - 150 );
	    }
	};
    } ,
    copyImg:function( x, y, w, h ) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.context.arc( 150, 150 , 150 , 0 , Math.PI * 2 , true);
	this.context.clip();
	this.context.drawImage( this.img , x , y , w, h , 0 , 0, 300 ,300 );
    } ,
    show:function( x ,y ) {
	this.canvas.style.display= "block";
	this.canvas.style.pixelLeft = x;
	this.canvas.style.pixelRight = y;
    } ,
    hide:function( ) {
	this.canvas.style.display= "none";
    }
};

