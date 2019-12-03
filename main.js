let appWidth,appHeight; //variable to maintain the size of the app
let arr=[]; //array to store the required elements for the required algorithm
//pageNo: variable to store the current page number
//algoType: variable to store the selected algorithm type, Searching=1, sorting=2
//algoNo: variable to store the selected algorithm within a selected algorithm type
let pageNo, algoType, algoNo;

function setup()
{
	appWidth=(windowWidth<1280)?1280:windowWidth; //minimum width of the app should be 1280 pixels and max should be the windowWidth
	appHeight=(windowHeight<720)?720:windowHeight; //minimum height of the app should be 720 pixels and max should be the windowHeight
	createCanvas(appWidth,appHeight);
	pageNo=0;
	algoType=0;
	algoNo=0;
}

function draw()
{
	clear();
	background(200,0,100);
	//switch case to maintain required pages with pageNo value
	switch(pageNo)
	{
	case 0:
		
	break;
	case 1:

	break;
	case 2:

	break;
	}
}
function windowResized()
{
	appWidth=(windowWidth<1280)?1280:windowWidth;
	appHeight=(windowHeight<720)?720:windowHeight;
	resizeCanvas(appWidth, appHeight);
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
function generateArray(let n)
{
	arr=[];
	for(let i=0;i<n;i++)
	{
		append(arr,random(1,100));
	}
}
function selectionSort()
{
	let m;
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