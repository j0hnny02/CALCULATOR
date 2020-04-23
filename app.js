const 
    operation_div = document.querySelector('.operation'),
    number_div = document.querySelectorAll('.number'),
    screen_div = document.querySelector('.screen');

number_div.forEach(e => e.addEventListener('click', e => screen_div.innerHTML += e.target.value))