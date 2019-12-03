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
let pageNo, algoType, algoNo;
let sortBtn, searchBtn, treeBtn, firstPageBtns, backBtn;
var heading, subheading;
var sortPageBtns;
var selectionSort, mergeSort, bubbleSort;

function setup() {
    appWidth = (windowWidth < 1280) ? 1280 : windowWidth; //minimum width of the app should be 1280 pixels and max should be the windowWidth
    appHeight = (windowHeight < 720) ? 720 : windowHeight; //minimum height of the app should be 720 pixels and max should be the windowHeight
    createCanvas(appWidth, appHeight);
    pageNo = 0;
    algoType = 0;
    algoNo = 0;
    firstPageBtns = select('#btns'); //storing all btns in of first page in a variable
    sortPageBtns = select('#allSortButtons'); //storing the div containing all sort related buttons
    backBtn = createButton('Back'); //creating a back button
    backBtn.addClass('btn');
    backBtn.addClass('btn-danger');
    selectionSort = select('#selectionSort');
    mergeSort = select('#mergeSort');
    bubbleSort = select('#bubbleSort');
    showLandingPage(); //show first page
}
/*------------ Landing Page------------------*/
function showLandingPage() {
    heading = select("#heading"); //Select heading on index page
    subHeading = select("#subheading"); //Select sub-heading part on index page
    heading.html("Algorithm Visualizer"); //Text of heading on first page
    subHeading.html("Welcome! Watch animations of all Data Structures and Algorithms in Real time"); //text of subheading on first page
    firstPageBtns.show(); //show all buttons of first page
    backBtn.hide(); //Hiding back button on first page
    sortPageBtns.hide() //hiding sort page buttons
    sortBtn = select('#sort');
    sortBtn.mousePressed(showSortingPage);
}
/* ------- End of Landing Page ----------*/

/*--------------------- Sorting Selected Page ----------------*/
function showSortingPage() {
    // pageNo = 1;
    // algoType = 2;
    //changing display text of headings
    heading.html("Sorting Visualizer"); //Text of heading on first page
    subHeading.html("Let's visualize some sorting algorithms!!!"); //text of subheading on first page
    pageNo = 1; //Setting variable value to 1 as user chose Sorting

    firstPageBtns.hide(); //hiding the buttons of first page
    sortPageBtns.show(); //showing sort page buttons

    //adding a back button
    backBtn.show()
    backBtn.mousePressed(showLandingPage);

    //calling each function when clicked on given algorithm
    selectionSort.mousePressed(selectionSortSelected);
    mergeSort.mousePressed(mergeSortSelected);
    bubbleSort.mousePressed(bubbleSortSelected);

}
/* -------End of Sorting Page --------------*/

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

function selectionSortSelected() {
    pageNo = 1;
    algoType = 1;

    heading.html("Selection Sort"); //Text of heading on first page
    /* Making button look selected */
    selectionSort.addClass("active");
    bubbleSort.removeClass("active");
    mergeSort.removeClass("active");
    /* Making button look selected  END*/


}

function mergeSortSelected() {
    pageNo = 1;
    algoType = 2;
    heading.html("Merge Sort"); //Text of heading on first page
    /* Making button look selected */
    selectionSort.removeClass("active");
    bubbleSort.removeClass("active");
    mergeSort.addClass("active");
    /* Making button look selected  END*/
}

function bubbleSortSelected() {
    pageNo = 1;
    algoType = 3;
    heading.html("Bubble Sort"); //Text of heading on first page
    /* Making button look selected */
    selectionSort.removeClass("active");
    bubbleSort.addClass("active");
    mergeSort.removeClass("active");
    /* Making button look selected  END*/
}

// function generateArray(let n) {
//     arr = [];
//     for (let i = 0; i < n; i++) {
//         append(arr, (int)(100 * random()));
//     }
// }

function selectionSort() {
    let m;
    for (let i = 0; i < arr.length - 1; i++) {
        m = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[m] > arr[j])
                m = j;
        }
        if (m != i) {
            let t = arr[m];
            arr[m] = arr[i];
            arr[i] = t;
        }
    }
}