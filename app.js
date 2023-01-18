
(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equals = document.querySelector('.btn-equal');


    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equals.addEventListener('click', function(e) {
        if(screen.value === ''){
           screen.value = "Please enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    })

    const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');

    toggle.onclick = function() {
        toggle.classList.toggle('active');
        body.classList.toggle('dark');
    }
})();
