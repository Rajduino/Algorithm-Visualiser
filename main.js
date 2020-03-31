let appWidth, appHeight; //variable to maintain the size of the app
let arr = []; //array to store the required elements for the required algorithm
//pageNo: variable to store the current page number
//algoType: variable to store the selected algorithm type, Searching=1, sorting=2
//algoNo: variable to store the selected algorithm within a selected algorithm type
//sortBtn: variable to select the sort button on first page when clicked on it
//searchBtn: variable to select the search button on first page when clicked on it
//treeBtn: variable to select the tree button on first page when clicked on it.
//heading: variable that can be used to manipulate the text of the heading in index page
//subHeading: variable that can be used to manipulate the text of the sub-heading in index page
//firstPageBtns: variable to select all buttons on first page(selects entire div)
//backBtn: variable that will link to previous page
//selectionSort, mergeSort, bubbleSort: selecting the sorting buttons from html and storing inside them
let pageNo, algoType, algoNo, sorted, iterator;
let graphWidth, graphHeight, barWidth, max, graphPadLeft, graphPadTop;
let sortBtn, searchBtn, treeBtn, firstPageBtns, backBtn;
var heading, subheading, firstPageFooter;
var sortPageBtns;
var selectionSort, mergeSort, bubbleSort, btnForArrayGeneration;


function setup() {
    appWidth = (windowWidth < 1280) ? 1280 : windowWidth; //minimum width of the app should be 1280 pixels and max should be the windowWidth
    appHeight = (windowHeight < 720) ? 720 : windowHeight; //minimum height of the app should be 720 pixels and max should be the windowHeight
    createCanvas(appWidth, appHeight);
    pageNo = 0;
    algoType = 0; //** */
    algoNo = 0;
    //firstPageBtns = select('#btns'); //storing all btns in of first page in a variable
    //firstPageFooter = select('#firstPageFooter');
    //sortPageBtns = select('#allSortButtons'); //storing the div containing all sort related buttons
    //backBtn = createButton('Back'); //creating a back button
    //backBtn.addClass('btn');
    //backBtn.addClass('btn-danger');
    //backBtn.position(appWidth * 0.02, appHeight * 0.237)
    //selectionSort = select('#selectionSort');
    //mergeSort = select('#mergeSort');
    //bubbleSort = select('#bubbleSort');
    //btnForArrayGeneration = select('#btnForArrayGeneration');
    //showLandingPage(); //show first page
}
/*
/*------------ Landing Page------------------
function showLandingPage() {
    arr = [];
    heading = select("#heading"); //Select heading on index page
    subHeading = select("#subheading"); //Select sub-heading part on index page
    heading.html("Algorithm Visualizer"); //Text of heading on first page
    subHeading.html("Watch animations of all Data Structures & Algorithms in Real time"); //text of subheading on first page
    firstPageBtns.show(); //show all buttons of first page
    firstPageFooter.show(); //show entire footer on first page
    backBtn.hide(); //Hiding back button on first page
    sortPageBtns.hide() //hiding sort page buttons
    sortBtn = select('#sort');
    sortBtn.mousePressed(showSortingPage);
}
// ------- End of Landing Page ----------
*/
/*
/*--------------------- Sorting Selected Page ----------------
function showSortingPage() {
    // pageNo = 1;
    // algoType = 2;
    //changing display text of headings
    heading.html("Sorting Visualizer"); //Text of heading on first page
    subHeading.html("Let's visualize some sorting algorithms!!!"); //text of subheading on first page
    pageNo = 1; //Setting variable value to 1 as user chose Sorting

    firstPageBtns.hide(); //hiding the buttons of first page
    firstPageFooter.hide(); //hiding the footer that was on the landing page.
    sortPageBtns.show(); //showing sort page buttons

    //adding a back button
    backBtn.show()
    backBtn.mousePressed(showLandingPage);

    //generating and displaying the random array bars
    btnForArrayGeneration.mousePressed(createTheArray);

    //calling each function when clicked on given algorithm
    selectionSort.mousePressed(selectionSortSelected);
    mergeSort.mousePressed(mergeSortSelected);
    bubbleSort.mousePressed(bubbleSortSelected);
}
/* -------End of Sorting Page --------------
*/
/*
function createTheArray() {
    generateArray(10);
}
*/

function draw() {
    graphWidth = appWidth * 0.6;
    graphHeight = appHeight * 0.6;
    barWidth = graphWidth / arr.length;
    graphPadLeft = appWidth * 0.2;
    graphPadTop = appHeight * 0.3;
    clear();
    //background(200, 0, 100);
    background(247, 185, 199);
    fill(0, 200, 200);
    //switch case to maintain required pages with pageNo value
    switch (pageNo) {
        case 0:
            rect(graphPadLeft,graphPadTop,400,200);
            rect(graphPadLeft+405,graphPadTop,400,200);
            fill(0);
            text("Searching Algorithms",graphPadLeft,graphPadTop+20);
            text("Sorting Algorithms",graphPadLeft+405,graphPadTop+20);
            break;
        case 1:
            if (algoType === 1)
            {
                rect(graphPadLeft,graphPadTop,400,200);
                rect(graphPadLeft+405,graphPadTop,400,200);
                fill(0);
                text("Linear Search",graphPadLeft,graphPadTop+20);
                text("Binary Search",graphPadLeft+405,graphPadTop+20);
            }
            else if(algoType===2)
            {
                rect(graphPadLeft,graphPadTop,400,200);
                rect(graphPadLeft+405,graphPadTop,400,200);
                fill(0);
                text("Selection Sort",graphPadLeft,graphPadTop+20);
                text("Bubble Sort",graphPadLeft+405,graphPadTop+20);
            }
            break;
        case 2:
            if (algoType === 1)
            {
                if(algoNo===1)
                {

                }
            }
            else if(algoType===2)
            {
                if(algoNo===1)
                {
                    if (sorted === false) {
                        sorted = selectionSortS(iterator);
                        iterator = iterator + 1;
                    }
                }
            }
            break;
    }
    for (let i = 0; i < arr.length; i++) {
        rect(graphPadLeft + i * barWidth, graphPadTop + (max - arr[i]) * graphHeight / max, barWidth, arr[i] * graphHeight / max);
    }
}

function windowResized() {
    appWidth = (windowWidth < 1280) ? 1280 : windowWidth;
    appHeight = (windowHeight < 720) ? 720 : windowHeight;
    resizeCanvas(appWidth, appHeight);
}

function mousePressed() {
    switch (pageNo) {
        case 0:
            if(mouseX> graphPadLeft && mouseX< graphPadLeft+400 && mouseY>graphPadTop && mouseY<graphPadTop+200)
            {
                pageNo++;
                algoType=1;
            }
            else if(mouseX> graphPadLeft+405 && mouseX< graphPadLeft+405+400 && mouseY>graphPadTop && mouseY<graphPadTop+200)
            {
                pageNo++;
                algoType=2;
            }
            break;
        case 1:
            if (algoType === 1) 
            {
                if(mouseX> graphPadLeft && mouseX< graphPadLeft+400 && mouseY>graphPadTop && mouseY<graphPadTop+200)
                {
                    pageNo++;
                    algoNo=1;
                }
                else if(mouseX> graphPadLeft+405 && mouseX< graphPadLeft+405+400 && mouseY>graphPadTop && mouseY<graphPadTop+200)
                {
                    pageNo++;
                    algoNo=2;
                }
            }
            else if (algoType === 2)
            {
                if(mouseX> graphPadLeft && mouseX< graphPadLeft+400 && mouseY>graphPadTop && mouseY<graphPadTop+200)
                {
                    pageNo++;
                    algoNo=1;
                    sorted=false;
                    generateArray(10);
                    iterator=0;
                }
                else if(mouseX> graphPadLeft+405 && mouseX< graphPadLeft+405+400 && mouseY>graphPadTop && mouseY<graphPadTop+200)
                {
                    pageNo++;
                    algoNo=2;
                }
            }
            break;
        case 2:
            break;
    }
}

function generateArray(n) {
    arr = [];
    max = 0;
    for (let i = 0; i < n; i++) {
        append(arr, (int)(100 * random()));
        if (max < arr[i])
            max = arr[i];
    }
}
/*

function selectionSortSelected() {
    pageNo = 1;
    algoType = 2;
    algoNo = 1;

    heading.html("Selection Sort"); //Text of heading on first page
    subHeading.html("It's worst case complexity is O(n<sup>2</sup>). Pretty bad huh?"); //sub-heading text shown upon selecting this sort/search
    /* Making button look selected 
    selectionSort.addClass("active");
    bubbleSort.removeClass("active");
    mergeSort.removeClass("active");
    /* Making button look selected  END

}

function mergeSortSelected() {
    pageNo = 1;
    algoType = 2;
    algoNo = 2;
    heading.html("Merge Sort"); //Text of heading on first page
    subHeading.html("It's worst case complexity is O(n*log(n)). Not Bad!!"); //sub-heading text shown upon selecting this sort/search
    /* Making button look selected 
    selectionSort.removeClass("active");
    bubbleSort.removeClass("active");
    mergeSort.addClass("active");
    /* Making button look selected  END
}

function bubbleSortSelected() {
    pageNo = 1;
    algoType = 2;
    algoNo = 3;
    heading.html("Bubble Sort"); //Text of heading on first page
    subHeading.html("Did you know? It's worst case complexity is O(n<sup>2</sup>)."); //sub-heading text shown upon selecting this sort/search
    /* Making button look selected 
    selectionSort.removeClass("active");
    bubbleSort.addClass("active");
    mergeSort.removeClass("active");
    /* Making button look selected  END
}
*/
function selectionSortS(d) {
    let y, m, t, n;
    myDelay(500);
    n = arr.length;
    if (d >= n)
        return true;
    m = d;
    for (y = d + 1; y < n; y++) {
        if (arr[m] > arr[y])
            m = y;
    }
    if (m != d) {
        t = arr[m];
        arr[m] = arr[d];
        arr[d] = t;
    }
    if (d < (n - 1))
        return false;
    else
        return true;
}

function myDelay(deltaT) {
    let startT = millis();
    while (millis() < startT + deltaT);
}