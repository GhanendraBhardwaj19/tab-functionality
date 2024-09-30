let btns = document.querySelectorAll(".btn");
let contentBoxs = document.querySelectorAll(".content-box");

function display(tabname) {
  // Remove 'active' class from all buttons to ensure only one active button
  for (let btn of btns) {
    btn.classList.remove("active");
  }

  // Remove 'active' class from all content boxes
  for (let box of contentBoxs) {
    box.classList.remove("active");
  }

  // Add 'active' class to the clicked button
  event.currentTarget.classList.add("active");

  // Show the selected content box
  document.getElementById(tabname).classList.add("active");
}
