function setup()
{
	createCanvas(windowWidth,windowHeight);
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
	resizeCanvas(windowWidth, windowHeight);
}