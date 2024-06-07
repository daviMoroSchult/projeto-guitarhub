// Select the description button and the description element
var btnDesc = document.querySelector(".btn-desc-gtr1");
var desc = document.querySelector(".desc");
var btnCarac = document.querySelector(".btn-carac-gtr1");
var carac = document.querySelector(".carac");
var btnSpec = document.querySelector(".btn-spec-gtr1");
var spec = document.querySelector(".spec");
var btnInfo = document.querySelector(".btn-info");

// Add an event listener to the description button
btnDesc.addEventListener("click", () => {
    // Toggle the display style of the description element
    if (desc.style.display == 'block') {
        desc.style.display = 'none';
        btnDesc.style.borderBottom = '2px solid transparent'; 
    } else {
        desc.style.display = 'block'
        btnDesc.style.borderBottom = '2px solid white';
    }
        spec.style.display = 'none';
        carac.style.display = 'none';
        btnCarac.style.borderBottom = '2px solid transparent';
        btnSpec.style.borderBottom = '2px solid transparent';
    
});

// Select the description button and the description element


// Add an event listener to the description button
btnCarac.addEventListener("click", () => {
    // Toggle the display style of the description element
    if (carac.style.display == 'block') {
        carac.style.display = 'none';
        btnCarac.style.borderBottom = '2px solid transparent'; 
    } else {
        carac.style.display = 'block'
        btnCarac.style.borderBottom = '2px solid white';
    }
    btnSpec.style.borderBottom = '2px solid transparent';
    btnDesc.style.borderBottom = '2px solid transparent';
    desc.style.display = 'none';
    spec.style.display = 'none';

});



// Add an event listener to the description button
btnSpec.addEventListener("click", () => {
    // Toggle the display style of the description element
        desc.style.display = 'none';
        carac.style.display = 'none';
        btnDesc.style.borderBottom = '2px solid transparent';
        btnCarac.style.borderBottom = '2px solid transparent';
        btnSpec.style.borderBottom = '2px solid white';
        spec.style.display = 'block';
        
        
});

var btnCorpo = document.querySelector(".btn-corpo");
var corpo = document.querySelector(".divd1");

// Add an event listener to the description button
btnCorpo.addEventListener("click", () => {
    // Toggle the display style of the description element
    if (corpo.style.display == 'block') {
        corpo.style.display = 'none'; 
    } else {
        corpo.style.display = 'block'
    }
        
});

var btnBraco = document.querySelector(".btn-braco");
var braco = document.querySelector(".d3");

// Add an event listener to the description button
btnBraco.addEventListener("click", () => {
    // Toggle the display style of the description element
    if (braco.style.display == 'block') {
        braco.style.display = 'none'; 
    } else {
        braco.style.display = 'block'
    }
        
});

var btnHardware = document.querySelector(".btn-hardware");
var hardware = document.querySelector(".d4");

// Add an event listener to the description button
btnHardware.addEventListener("click", () => {
    // Toggle the display style of the description element
    if (hardware.style.display == 'block') {
        hardware.style.display = 'none'; 
    } else {
        hardware.style.display = 'block'
    }
        
});

var btnEletronicos = document.querySelector(".btn-eletronicos");
var eletronicos = document.querySelector(".d5");
// Add an event listener to the description button
btnEletronicos.addEventListener("click", () => {
    // Toggle the display style of the description element
    if (eletronicos.style.display == 'block') {
        eletronicos.style.display = 'none'; 
    } else {
        eletronicos.style.display = 'block'
    }
        
});

btnInfo.addEventListener("click", () => {
    var info = document.querySelector(".gtr2-informacoes");
    if (info.style.display == 'block') {
        info.style.display = 'none';
        btnInfo.style.borderBottom = '2px solid transparent'; 
    } else {
        info.style.display = 'block'
        btnInfo.style.borderBottom = '2px solid white';
    }
    
});