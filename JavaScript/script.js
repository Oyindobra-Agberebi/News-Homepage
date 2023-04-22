const mobileBtn = document.getElementById('btn-add');

const mobileExit = document.getElementById('btn-remove');

const ul = document.querySelector('ul');

const mainBody = document.querySelector('main');


mobileBtn.addEventListener('click', function () {
    ul.style.right = '0'
    mainBody.setAttribute('class', 'nav-open')
})


mobileExit.addEventListener('click', function(){
    ul.style.right = '-600px'
    mainBody.classList.remove('nav-open');

 })