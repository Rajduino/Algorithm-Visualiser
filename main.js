let appWidth,appHeight; //variable to maintain the size of the app
function setup()
{
	appWidth=(windowWidth<1280)?1280:windowWidth; //minimum width of the app should be 1280 pixels and max should be the windowWidth
	appHeight=(windowHeight<720)?720:windowHeight; //minimum height of the app should be 720 pixels and max should be the windowHeight
	createCanvas(appWidth,appHeight);
}

function draw()
{
	clear();
	background(200,0,100);
	fill(0,255,255);
	noStroke();
	ellipse(mouseX,mouseY,50,50);
}
function windowResized()
{
	appWidth=(windowWidth<1280)?1280:windowWidth;
	appHeight=(windowHeight<720)?720:windowHeight;
	resizeCanvas(appWidth, appHeight);
}