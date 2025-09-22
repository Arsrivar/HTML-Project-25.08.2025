// run the code once the document is fully loaded

this.onload = ()=>{ 

    // Make a reference to a node (html element)

    const body = document.querySelector('body');

    // Create a new element

    const title = document.createElement('h1');
   
    // Add text content to the element
    title.textContent = 'hello, I am addded by code !';
    const mySpan = document.createElement("span");
    mySpan.textContent = "(span)";
    mySpan.style.color = "red";
    mySpan.style.fontSize = "200px";
    mySpan.style.fontWeight = "bold";
    mySpan.style.textDecoration = "underline";
    title.appendChild(mySpan);

    // Add the H1 as a child of the body element
    body.appendChild(title);
   
    //
    // removing elements
    //
    // const unwanted = document.querySelector('em');
    // const unwanted = document.querySelector('#unwanted');

    const unwanted = document.querySelector('.info');

    // body.removeChild(unwanted); // deleting from parent container
    // unwanted.remove(); // self removing 
}