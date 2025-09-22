this.onload = () => {
  // gettting the elements
  const btn1 = document.querySelector("#btn1");
  // const btn2 = document.querySelector("#btn2");
  // adding events with event properties
  btn1.onclick = onclick1;
  // will ovverride onclick1,
  // wird onclick1 außer Kraft setzen
  // remplacera onclick1
  // btn1.onclick = onclick2;

  // adding events with addEventListener
  // several listeners can be added to a single event
  // mehrere Listener können zu einem einzigen Ereignis hinzugefügt werden
  // plusieurs listeners peuvent être ajoutés à un seul événement
  btn2.addEventListener("click", onclick1); // both are available
  btn2.addEventListener("click", onclick2);

  // adding an listener to several elements' event
  let tests = document.querySelectorAll("p"); // fetch all P

  tests.forEach(
        function (i) {
             i.addEventListener("click", 
                 function(e){e.target.classList.toggle("selected")}
             );
         }
   );

  // same but shorter
  /* 
  tests.forEach((i) =>
    i.addEventListener("click", (e) => e.target.classList.toggle("selected"))
  ); 
  */
  function onclick1(e) {
    // is clicked object
    // console.log(this,e, e.target);
     console.info("onclick1", e.target.textContent);
  }
  function onclick2(e) {
    // is clicked object
    // console.log(this,e, e.target);
    // console.info("onclick2", e.target.textContent);
  }
};

/**
 * Other events to try :
 * - MouseEvents:
 * -- click 
 * -- dblclick 
 * -- mousedown 
 * -- mouseup
 * - KeyboardEvent (to be targted on document)
 * -- keydown
 * -- keypress
 * -- keyup
 * - FocusEvent (to be targted on selectable objects liek text field)
 * -- focus
 * -- blur (defocus)
 * -- focusin
 * -- focusout
 * */ 