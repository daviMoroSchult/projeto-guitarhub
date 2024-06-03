// Select the description button and the description element
var btnDesc = document.querySelector(".btn-desc-gtr1");
var desc = document.querySelector(".desc");

// Add an event listener to the description button
btnDesc.addEventListener("click", () => {
    // Toggle the display style of the description element
        desc.style.display = 'block';
        btnDesc.style.borderBottom = '2px solid white';
    
});


// Select the description button and the description element
var btnCarac = document.querySelector(".btn-carac-gtr1");
var carac = document.querySelector(".carac");

// Add an event listener to the description button
btnCarac.addEventListener("click", () => {
    // Toggle the display style of the description element
        carac.style.display = 'block';
        btnCarac.style.borderBottom = '2px solid white';
});


