function setup()
{
	createCanvas(windowWidth,windowHeight);
}

function draw()
{
	clear();
	background(200,0,100);
	ellipse(mouseX,mouseY,50,50);
}
function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);
}