function hej(){
    if(document.body.querySelector('header').style.height != '100vh'){
        document.body.querySelector('header').style.height = '100vh';
        document.body.querySelector('.drop-down').style.display = 'initial'
    }
    else{
        document.body.querySelector('header').style.height = '5rem';
        document.body.querySelector('.drop-down').style.display = 'none'
    }
    
}