let appWidth,appHeight; //variable to maintain the size of the app
let arr=[]; //array to store the required elements for the required algorithm
//pageNo: variable to store the current page number
//algoType: variable to store the selected algorithm type, Searching=1, sorting=2
//algoNo: variable to store the selected algorithm within a selected algorithm type
let pageNo, algoType, algoNo,sorted,iterator;

let graphWidth,graphHeight,barWidth,max,graphPadLeft,graphPadTop;

function setup()
{
	appWidth=(windowWidth<1280)?1280:windowWidth; //minimum width of the app should be 1280 pixels and max should be the windowWidth
	appHeight=(windowHeight<720)?720:windowHeight; //minimum height of the app should be 720 pixels and max should be the windowHeight
	createCanvas(appWidth,appHeight);
	pageNo=0;
	algoType=2;
	algoNo=1;
	generateArray(10);
}

function draw()
{
	graphWidth=appWidth*0.6;
	graphHeight=appHeight*0.6;
	barWidth=graphWidth/arr.length;
	graphPadLeft=appWidth*0.2;
	graphPadTop=appHeight*0.3;
	clear();
	background(255);
	fill(0,200,200);
	//switch case to maintain required pages with pageNo value
	switch(pageNo)
	{
	case 0:
		
	break;
	case 1:
		if(algoType===1)
		{

		}
		else if(algoType===2)
		{
			if(algoNo===1)
			{
				if(sorted===false)
				{
					sorted=selectionSortS(iterator);
					iterator=iterator+1;
				}
			}
		}
	break;
	case 2:

	break;
	}
	for(let i=0;i<arr.length;i++)
	{
		rect(graphPadLeft+i*barWidth,graphPadTop+(max-arr[i])*graphHeight/max,barWidth,arr[i]*graphHeight/max);
	}
}
function windowResized()
{
	appWidth=(windowWidth<1280)?1280:windowWidth;
	appHeight=(windowHeight<720)?720:windowHeight;
	resizeCanvas(appWidth, appHeight);
}
function mousePressed()
{
	console.log("called");
	pageNo=1;
	sorted=false;
	iterator=0;
	//selectionSort();
}
function searchingSelected()
{
	pageNo=1;
	algoType=1;
}
function sortingSelected()
{
	pageNo=1;
	algoType=2;
}
function generateArray(n)
{
	arr=[];
	max=0;
	for(let i=0;i<n;i++)
	{
		append(arr,(int)(100*random()));
		if(max<arr[i])
			max=arr[i];
	}
}
/*
function selectionSort()
{
	print(arr);
	let graphWidth,graphHeight,barWidth,max,graphPadLeft,graphPadTop;
	graphWidth=appWidth*0.8;
	graphHeight=appHeight*0.8;
	barWidth=graphWidth/arr.length;
	graphPadLeft=appWidth*0.1;
	graphPadTop=appHeight*0.1;
	let m;
	m=0;
	for(let i=0;i<arr.length;i++)
	{
		if(arr[m]<arr[i])
			m=i;
	}
	max=arr[m];
	for(let i=0;i<arr.length-1;i++)
	{
		m=i;
		for(let j=i+1;j<arr.length;j++)
		{
			if(arr[m]>arr[j])
				m=j;
		}
		if(m!=i)
		{
			let t=arr[m];
			arr[m]=arr[i];
			arr[i]=t;
		}
	}
}
*/
function selectionSortS(d)
{
	let y,m,t,n;
	myDelay(500);
	n=arr.length;
	if(d>=n)
		return true;
	m=d;
	for(y=d+1;y<n;y++)
	{
		if(arr[m]>arr[y])
			m=y;
	}
	if(m!=d)
	{
		t=arr[m];
		arr[m]=arr[d];
		arr[d]=t;
	}
	if(d<(n-1))
		return false;
	else
		return true;
}
function myDelay(deltaT)
{
	let startT=millis();
	while(millis() < startT + deltaT);
}