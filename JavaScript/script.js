const mobileBtn = document.getElementById('btn-add');

const mobileExit = document.getElementById('btn-remove');

const ul = document.querySelector('ul');

const mainBody = document.querySelector('main');


mobileBtn.addEventListener('click', function () {
    ul.classList.remove('btn');
    mainBody.setAttribute('class', 'nav-open')
})


mobileExit.addEventListener('click', function(){
    ul.classList.add('btn');
    mainBody.classList.remove('nav-open');

 })