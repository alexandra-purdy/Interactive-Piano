window.addEventListener("DOMContentLoaded", function () {
  const popover = document.getElementById("mypopover");

  // Check screen width and set popover content with line breaks
  if (window.innerWidth <= 500) {
    popover.innerHTML = "your screen size tells me you're using a mobile device!<br><br>tap on the piano <br> use 2 fingers to zoom <br> 1 finger to move";
  } else {
    popover.innerHTML = "your screen size tells me you're using a desktop or tablet!<br><br> click on the piano, or use the top two rows of letter keys! <br><br> (q-p and a-;)";
  }

  popover.showPopover();

  // Hide the popover when clicked
  popover.addEventListener("click", function () {
    this.hidePopover();
  });
});
