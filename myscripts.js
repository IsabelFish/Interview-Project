//cursor effect (from https://tholman.com/cursor-effects/)
window.addEventListener("load", (event) => {
    new cursoreffects.ghostCursor();
  });

//back to top button (from https://www.w3schools.com/js/js_comments.asp)

 // Get the button:
 let mybutton = document.getElementById("myBtn");

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
