document.querySelector(".duplicateBtn").addEventListener("click", function(e){
  const div = document.querySelector(".mainWrapper");
  let division = div.cloneNode(true);
  document.body.appendChild(division);
});

//JavaScript Hover implementation
document.querySelector("div").addEventListener("mouseover", function (e) {
const div = document.querySelector(".mainWrapper");
div.style.borderColor = "white";
});

document.querySelector("div").addEventListener("mouseout", function (e) {
const div = document.querySelector(".mainWrapper");
div.style.borderColor = "black";
});

//When the card is clicked the color changes
document.querySelector(".changeColorBtn").addEventListener("click", function (e) {
const div = document.querySelector(".mainWrapper");
div.style.backgroundColor = "gray";
});

document.querySelector(".ChangeHeadingBtn").addEventListener("click", function (e) {
heading.innerHTML = "Something else"; //replaces the text of the heading
});

document.querySelector(".deleteBtn").addEventListener("click", function (e) {
  let div = document.querySelector(".mainWrapper");
  div.remove();
});