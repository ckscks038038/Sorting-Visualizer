let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let bars_container = document.getElementById("bars_container");
let minRange = 10;
let maxRange = 50;
let numOfBars = 55;
let unsorted_array = new Array(numOfBars);


function ramdomNum(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray() {
  for ( let i = 0; i < numOfBars; ++i) 
    unsorted_array[i] = ramdomNum(minRange,maxRange);
}

window.addEventListener("load", function() {
  createRandomArray();
  renderBars(unsorted_array);
});

function renderBars(array) {
  for ( let i = 0; i <array.length; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * 10 + "px";
    bars_container.appendChild(bar);
  }
}


randomize_array.addEventListener("click", function () {
  createRandomArray();
  bars_container.innerHTML = "";
  renderBars(unsorted_array);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function bubbleSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {

        for (let k = 0; k < bars.length; k++)
          if ( k !== j && k !== j + 1)
            bars[k].style.backgroundColor = "white";

        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        bars[j].style.height = array[j] * 10 + "px";
        bars[j].style.backgroundColor = "lightgreen";
        bars[j + 1].style.height = array[j + 1] * 10 + "px";
        bars[j + 1].style.backgroundColor = "lightgreen";
        await sleep(10);
      }
    }
    await sleep(10);
  }
  return array;
}

sort_btn.addEventListener("click", function () {
  let sorted_array = bubbleSort(unsorted_array);
  console.log(sorted_array); 
});