let zero = document.querySelector('.zero');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let display = document.querySelector('.display');
let dot = document.querySelector('.dot');
let percent = document.querySelector('.percent');
let plusminus = document.querySelector('.plusminus');

onkeydown = function(e) {
    if (e.key == '0') {
        zero.click();
    } else if (e.key == '1') {
        one.click();
    } else if (e.key == '2') {
        two.click();
    } else if (e.key == '3') {
        three.click();
    } else if (e.key == '4') {
        four.click();
    } else if (e.key == '5') {
        five.click();
    } else if (e.key == '6') {
        six.click();
    } else if (e.key == '7') {
        seven.click();
    } else if (e.key == '8') {
        eight.click();
    } else if (e.key == '9') {
        nine.click();
    } else if (e.key == '+') {
        plus.click();
    } else if (e.key == '-') {
        minus.click();
    } else if (e.key == '*') {
        multiply.click();
    } else if (e.key == '/') {
        divide.click();
    } else if (e.key == 'Enter') {
        equal.click();
    } else if (e.key == '.') {
        dot.click();
    } else if (e.key == '%') {
        percent.click();
    } else if (e.key == 'Escape') {
        clear.click();
    } else if (e.key == 'Backspace') {
        display.textContent = display.textContent.slice(0, -1);
    }
}



document.querySelectorAll('.main-body > div').forEach(function(elem) {

    elem.onclick = function(e) {
        let last_char = display.textContent[display.textContent.length - 1];

        if (e.target == plus || e.target == minus || e.target == multiply || e.target == divide) {
            if (last_char == '+' || last_char == '-' || last_char == 'x' || last_char == '÷') {
                display.textContent = display.textContent.slice(0, -1);
            }
            display.textContent += e.target.textContent;

        } else if (display.textContent.includes('=')) {
            display.textContent = '';

        } else if (e.target != equal && e.target != clear && e.target != display ) {
        display.textContent += e.target.textContent;

        } else if (e.target == equal) {
            res_string = display.innerHTML.replace(/x/g, "*").replace(/÷/g, "/").replace(/%/g, "/100").replace(/±/g, "-");
            console.log(res_string);
            display.textContent = e.target.textContent + parseFloat(eval(res_string).toFixed(6));

        } else if (e.target == clear) {
            display.textContent = "";

        }
    }
});
