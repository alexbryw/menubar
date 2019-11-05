
/**
 * Sets drop-down menu to fullscreen 100vh if it's not 100vh already.
 */
function dropDown(){
    if(document.body.querySelector('header').style.height != '100vh'){
        document.body.querySelector('header').style.height = '100vh';
        document.body.querySelector('.drop-down').style.display = 'initial'
    }
    else{
        document.body.querySelector('header').style.height = '4rem';
        document.body.querySelector('.drop-down').style.display = 'none'
    }
    
}
//Event listener for screen resize.
window.addEventListener("resize", removeDropDown);

/**
 * Remove drop-down if it's down and the screen is lager than 720px.
 */
function removeDropDown(){
    if(document.body.querySelector('header').style.height == '100vh' && window.innerWidth >= 720){
        document.body.querySelector('header').style.height = '4rem';
        document.body.querySelector('.drop-down').style.display = 'none'
    }
}

/**
 * Makes text larger when called.
 * Gets all the p element in an array and loops over them all.
 */
function zoomText(){
    let pElements = document.body.querySelectorAll('p');
    for(let pElement of pElements){
        pElement.style.fontSize = '1.5rem';
    }
}