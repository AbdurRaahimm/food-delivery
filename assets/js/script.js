
var elements =  document.getElementsByClassName("column");


// List View
function listView() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
} 