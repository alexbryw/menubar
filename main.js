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


//remove dropdown if its down and the screen is lager than 720px.
function removeDropDown(){
    if(document.body.querySelector('header').style.height == '100vh' && window.innerWidth >= 720){
        document.body.querySelector('header').style.height = '4rem';
    }
}