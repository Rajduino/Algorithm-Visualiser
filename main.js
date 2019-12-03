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
let pageNo, algoType, algoNo;
let sortBtn, searchBtn, treeBtn, firstPageBtns, backBtn;
var heading, subheading;

function setup() {
    appWidth = (windowWidth < 1280) ? 1280 : windowWidth; //minimum width of the app should be 1280 pixels and max should be the windowWidth
    appHeight = (windowHeight < 720) ? 720 : windowHeight; //minimum height of the app should be 720 pixels and max should be the windowHeight
    createCanvas(appWidth, appHeight);
    pageNo = 0;
    algoType = 0;
    algoNo = 0;
    firstPageBtns = select('#btns'); //storing all btns in of first page in a variable
    backBtn = createButton('Back'); //creating a back button
    showLandingPage(); //show first page
}

function showLandingPage() {
    heading = select("#heading"); //Select heading on index page
    subHeading = select("#subheading"); //Select sub-heading part on index page
    heading.html("Algorithm Visualizer"); //Text of heading on first page
    subHeading.html("Welcome! Watch animations of all Data Structures and Algorithms in Real time"); //text of subheading on first page
    firstPageBtns.show(); //show all buttons of first page
    backBtn.hide(); //Hiding back button on first page
    sortBtn = select('#sort');
    sortBtn.mousePressed(showSortingPage);

}

function showSortingPage() {
    //changing display text of headings
    heading.html("Sorting Visualizer"); //Text of heading on first page
    subHeading.html("Let's visualize some sorting algorithms!!!"); //text of subheading on first page

    //hiding the buttons of first page
    firstPageBtns.hide();

    //adding a back button
    backBtn.show()
    backBtn.mousePressed(showLandingPage);

}

function draw() {
    clear();
    background(200, 0, 100);
    //switch case to maintain required pages with pageNo value
    switch (pageNo) {
        case 0:

            break;
        case 1:

            break;
        case 2:

            break;
    }
}

function windowResized() {
    appWidth = (windowWidth < 1280) ? 1280 : windowWidth;
    appHeight = (windowHeight < 720) ? 720 : windowHeight;
    resizeCanvas(appWidth, appHeight);
}