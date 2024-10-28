var bars = document.querySelectorAll(".bars");
var btnBubbleSort = document.querySelector(".bubble-sort");
var btnSelectionSort = document.querySelector(".selection-sort");
var btnInsertionSort = document.querySelector(".insertion-sort");
var btnUnsort = document.querySelector(".btn-unsort");
var myInterval;
var heightArray = [];
var c = 0;
var rnHeight;

function unsort() {
   bars.forEach((bar) => {
      rnHeight = Math.floor(Math.random() * 35) + 5;
      heightArray[c++] = rnHeight;
      bar.style.height = `${rnHeight}rem`;
      bar.style.background = "red";
   });
}
unsort();
btnUnsort.addEventListener("click", () => {
   c = 0;
   unsort();
   btnEnable();
});

btnBubbleSort.addEventListener("click", () => {
   btnDisable();
   myInterval = setInterval(bubbleSort, 10);
});

var i = 0;
var j = 0;
var temp;
function bubbleSort() {
   if (heightArray[j] > heightArray[j + 1]) {
      temp = heightArray[j];
      heightArray[j] = heightArray[j + 1];
      heightArray[j + 1] = temp;
      bars[j].style.height = `${heightArray[j]}rem`;
      bars[j + 1].style.height = `${heightArray[j + 1]}rem`;
   }
   j++;
   if (j == heightArray.length - i - 1) {
      bars[j].style.background = "aqua";
      i++;
      j = 0;
   }
   if (i == heightArray.length - 1) {
      bars[0].style.background = "aqua";
      clearInterval(myInterval);
      i = 0;
      j = 0;
      btnUnsort.disabled = false;
   }
}

btnSelectionSort.addEventListener("click", () => {
   btnDisable();
   myInterval = setInterval(selectionSort, 10);
});

var ii = 0;
var jj = ii + 1;
var min = ii;
var t;
function selectionSort() {
   if (heightArray[min] > heightArray[jj]) {
      min = jj;
   }
   jj++;
   if (jj === heightArray.length) {
      t = heightArray[ii];
      heightArray[ii] = heightArray[min];
      heightArray[min] = t;
      bars[ii].style.height = `${heightArray[ii]}rem`;
      bars[min].style.height = `${heightArray[min]}rem`;
      bars[ii].style.background = "aqua";
      ii++;
      min = ii;
      jj = ii + 1;
   }
   if (ii === heightArray.length - 1) {
      bars[ii].style.background = "aqua";
      clearInterval(myInterval);
      ii = 0;
      jj = ii + 1;
      min = ii;
      btnUnsort.disabled = false;
   }
}

btnInsertionSort.addEventListener("click", () => {
   btnDisable();
   myInterval = setInterval(insertionSort, 10);
});

var ttt;
var iii = 1;
var jjj = iii;
function insertionSort() {
   if (heightArray[jjj - 1] > heightArray[jjj]) {
      ttt = heightArray[jjj - 1];
      heightArray[jjj - 1] = heightArray[jjj];
      heightArray[jjj] = ttt;
      bars[jjj].style.height = `${heightArray[jjj]}rem`;
      bars[jjj - 1].style.height = `${heightArray[jjj - 1]}rem`;
      jjj--;
   } else {
      iii++;
      jjj = iii;
   }
   bars[jjj - 1].style.background = "aqua";
   if (iii == heightArray.length) {
      bars[iii - 1].style.background = "aqua";
      clearInterval(myInterval);
      iii = 1;
      jjj = iii;
      btnUnsort.disabled = false;
   }
}

function btnDisable() {
   btnBubbleSort.disabled = true;
   btnSelectionSort.disabled = true;
   btnInsertionSort.disabled = true;
   btnUnsort.disabled = true;
}

function btnEnable() {
   btnBubbleSort.disabled = false;
   btnSelectionSort.disabled = false;
   btnInsertionSort.disabled = false;
}
