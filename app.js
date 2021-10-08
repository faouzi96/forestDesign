
function Navigation(){

    const toggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation__items');
    toggle.addEventListener('click', ()=>{
        toggle.classList.toggle('active');
        navigation.classList.toggle('active');
    });
    
    }


Navigation()
