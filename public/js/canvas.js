

var context = can.getContext("2d");
var width = can.width;
var height = can.height;
var img = new Image();
img.src = "imgs/Harold.png";
img.onload = onLoadImage(img) ;

function onLoadImage(i) {
    return function() { 
        context.drawImage( i , 0 , 0, width , width );
    }
}
