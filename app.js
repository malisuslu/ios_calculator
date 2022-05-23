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
        if(result.length > 1 && result[result.length - 1] == operator) {
            result = result.toString().slice(0, -2);
            display.textContent = result;
        } else if (result.length == 1 || result.length == 0) {
            result = '';
            display.textContent = "0";
        } else {
            result = result.toString().slice(0, -1);
            display.textContent = result;
        }
        display.textContent = display.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else if (e.key == '+/-') {
        plusminus.click();
    }
}


let result = '';
let operator = '';
let isOver = false;

document.querySelectorAll('.main-body > div:not(.display)').forEach(function(elem) {
    elem.onclick = function(e) {


        e.target.classList.add('active'); 
        setTimeout(function() {
        e.target.classList.remove('active');
        }
        , 100);
        document.querySelector('.clear').textContent = 'C';

        if (e.target.classList.contains('clear')) {
            result = '';
            display.textContent = '0';
            document.querySelector('.clear').textContent = 'AC';
            operator = '';
            isOver = false;

        } else if (e.target.classList.contains('plusminus')) {
            if(typeof result != 'number') {
            result = eval(result.replace(/x/g, "*").replace(/÷/g, "/"));
            result = result * -1;
            display.textContent = result;

            } else {
            result = result * -1;
            display.textContent = result;
            }
            operator = '';
            isOver = false;

        } else if (e.target.classList.contains('percent')) {
            if(typeof result != 'number') {
            result = eval(result.replace(/x/g, "*").replace(/÷/g, "/"));
            result = result / 100;
            display.textContent = result;

            } else {
            result = result / 100;
            display.textContent = result;
            }
            operator = '';
            isOver = true;

        } else if (e.target.classList.contains('main')) {
            if(result[result.length - 1] == '+' || result[result.length - 1] == '-' || result[result.length - 1] == 'x' || result[result.length - 1] == '÷') {
                result = result.slice(0, -1);
                result = result + e.target.textContent;

            } else if (result.toString().includes('+') || result.toString().includes('-') || result.toString().includes('x') || result.toString().includes('÷')) {
                if (result.toString()[0] == '-') {
                    result = result + e.target.textContent;
                } else {
                    result = eval(result.toString().replace(/x/g, "*").replace(/÷/g, "/"));
                    display.textContent = parseFloat(result.toFixed(5));
                    result = result + e.target.textContent;   
                }

            } else {
                result = result + e.target.textContent;
            }

            operator = e.target.textContent;

        } else if (e.target.classList.contains('number')) {
            
            if(result.toString().includes('+') || result.toString().includes('-') || result.toString().includes('x') || result.toString().includes('÷')) {
                if (result.toString()[0] == '-') {
                    result = result + e.target.textContent;
                    display.textContent = result.slice(result.lastIndexOf(operator)+1, result.length);
                } else {
                result = result + e.target.textContent;
                display.textContent = result.slice(result.indexOf(operator)+1, result.length);
                }
            } else if(isOver) { 
                result = '';
                isOver = false;

            } else if (result.toString() == '0') {
                result = e.target.textContent;
                display.textContent = result;

            } else {
            result = result + e.target.textContent;
            display.textContent = result;
            }

        } else if (e.target.classList.contains('dot')) {
            if (result.includes('.')) {
                return;
            } else {
            result = result + e.target.textContent;
            display.textContent = result;
            }

        } else {
            result = eval(result.toString().replace(/x/g, "*").replace(/÷/g, "/"));
            display.textContent = parseFloat(result.toFixed(5));
            isOver = true;
            operator = '';
        }
        
        display.textContent = display.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    holdButton();
    displaySize();
    console.log(result);
    }
});

function displaySize() {
    let display = document.querySelector('.display');
    let displayWidth = display.offsetWidth;
    // console.log(displayWidth);
    let displayHeight = display.offsetHeight;
    // console.log(displayHeight);
    let fontSize = displayWidth / (display.textContent.length/1.8);
    if (fontSize > displayHeight) {
        display.style.fontSize = displayHeight + 'px';
    } else {
        display.style.fontSize = fontSize + 'px';
    }
}

function holdButton(e) {
    if (operator != '+' && operator != '-' && operator != 'x' && operator != '÷') {
        document.querySelectorAll('.main').forEach(function(elem) { 
            elem.style.opacity = '1';
        });
    } else if(operator == '+') {
    document.querySelectorAll('.main').forEach(function(elem) { 
        elem.style.opacity = '1';});
    document.querySelector('.plus').style.opacity = '0.5';
    } else if(operator == '-') {
    document.querySelectorAll('.main').forEach(function(elem) { 
        elem.style.opacity = '1';});
    document.querySelector('.minus').style.opacity = '0.5';
    } else if(operator == 'x') {
    document.querySelectorAll('.main').forEach(function(elem) { 
        elem.style.opacity = '1';});
    document.querySelector('.multiply').style.opacity = '0.5';
    } else if(operator == '÷') {
    document.querySelectorAll('.main').forEach(function(elem) { 
        elem.style.opacity = '1';});
    document.querySelector('.divide').style.opacity = '0.5';
    }
}


// let number = '';
// let next_number = '';
// let operator = '';
// let result = '';

// document.querySelectorAll('.main-body > div').forEach(function(elem) {
//     elem.onclick = function(e) {

//         e.target.classList.add('active'); 
//         setTimeout(function() {
//         e.target.classList.remove('active');
//         }
//         , 100);
//         document.querySelector('.clear').textContent = 'C';


//         if (e.target.classList.contains('clear')) {
//             result = '';
//             display.textContent = '0';
//             document.querySelector('.clear').textContent = 'AC';

//         } else if (e.target.classList.contains('plusminus')) {
//             result = result * -1;
//             display.textContent = result;

//         } else if (e.target.classList.contains('percent')) {
//             result = result / 100;
//             display.textContent = result;

//         } else if (e.target.classList.contains('main')) {
//             operator = e.target.textContent;

//         } else if (e.target.classList.contains('number')) {
//             if(operator == '') {
//                 number = number + e.target.textContent;
//                 display.textContent = number;

//             } else {
//             next_number = next_number + e.target.textContent;
//             display.textContent = next_number;
//             }

//         } else if (e.target.classList.contains('dot')) {
//             if (operator == '' && number.includes('.') ) {
//                 return;

//             } else if (operator != '' && next_number.includes('.') ) {
//                 return;

//             } else if (operator == '' && !number.includes('.') ) {
//                 number = number + e.target.textContent;
//                 display.textContent = number;

//             } else if (operator != '' && !next_number.includes('.') ) {
//                 next_number = next_number + e.target.textContent;
//                 display.textContent = next_number;
//             }

//         } else {
//             if (operator == '') {
//                 result = number;
//                 number = '';
//                 next_number = '';
//                 operator = e.target.textContent;
//                 display.textContent = operator;

//             } else {
//                 result = result + next_number;
//                 next_number = '';
//                 operator = e.target.textContent;
//                 display.textContent = operator;
//             }

//             result = eval(result.replace(/x/g, "*").replace(/÷/g, "/"));
//             display.textContent = parseFloat(result.toFixed(5));
//         }

//     }
// });

// //number with c
// function nwc(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }












