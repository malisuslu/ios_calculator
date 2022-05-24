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
let comma = document.querySelector('.comma');
let percent = document.querySelector('.percent');
let plusminus = document.querySelector('.plusminus');

/*
function rpl(str) {
    return str.replace('*', 'x').replace('/', '÷').replace('Escape', 'C').replace('Enter', '=').replace('.', ',');
}

onkeydown = function(e) {

    let key = "(//div/div[text()='" + rpl(e.key) + "'])[1]";
    console.log(key);   
   

    let elm = document.evaluate(key, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (elm) {
        e.target.classList.contains('main') ? display.textContent = 'err' : null;
        elm.click();
        console.log(elm);
    }

    if (e.key == 'Backspace') {
        if(result.length > 2 && result[result.length - 1] == operator) {
            result = result.toString().slice(0, -2);
            display.textContent = result;
            operator = '';

        } else if (result.length == 1 || result.length == 0 || result[0] == '-') {
            result = '0';
            display.textContent = result;
            operator = '';

        } else if (result.toString().includes('+') || result.toString().includes('-') || result.toString().includes('*') || result.toString().includes('/')) {
            result = result.toString().slice(0, -1);
            display.textContent = result.slice(result.lastIndexOf(operator)+1, result.length);
        } else {
            result = result.toString().slice(0, -1);
            display.textContent = result;
        }

        display.textContent = result.toString().replace('.', ',').replace(/\B(?<!\,\d*)(?=(\d{3})+(?!\d))/g, ".");

        holdButton();
        displaySize();

        console.log(result);
        console.log(operator);
        }
};
*/

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
    } else if (e.key == ',') {
        comma.click();
    } else if (e.key == '%') {
        percent.click();
    } else if (e.key == 'Escape') {
        clear.click();
    } else if (e.key == 'Backspace') {
        if(result.length > 2 && result[result.length - 1] == operator) {
            result = result.toString().slice(0, -2);
            display.textContent = result;
            operator = '';

        } else if (result.length == 1 || result.length == 0 || result[0] == '-') {
            result = '0';
            display.textContent = result;
            operator = '';

        } else if (result.toString().includes('+') || result.toString().includes('-') || result.toString().includes('*') || result.toString().includes('/')) {
            result = result.toString().slice(0, -1);
            display.textContent = result.slice(result.lastIndexOf(operator)+1, result.length);
        } else {
            result = result.toString().slice(0, -1);
            display.textContent = result;
        }

        display.textContent = result.toString().replace('.', ',').replace(/\B(?<!\,\d*)(?=(\d{3})+(?!\d))/g, ".");

        holdButton();
        displaySize();

        console.log(result);
        console.log(operator);

    } else if (e.key == '+/-') {
        plusminus.click();
    }
};


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
            result = '0';
            display.textContent = '0';
            document.querySelector('.clear').textContent = 'AC';
            operator = '';
            isOver = false;

        } else if (e.target.classList.contains('plusminus')) {
            if(typeof result != 'number') {
            result = eval(result.replaceAll(/x/g, "*").replaceAll(/÷/g, "/"));
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
            result = eval(result.replaceAll(/x/g, "*").replaceAll(/÷/g, "/"));
            result = parseFloat(result.toFixed(10)) / 100;
            display.textContent = result;

            } else {
            result = parseFloat(result.toFixed(10)) / 100;
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

                } else if (result.length >= 2 && result.toString()[result.length-1] == '0' && result.toString()[result.length-2] == '÷') {
                    result = '0';
                    display.textContent = 'undefined';
                
                } else {
                    result = eval(result.toString().replaceAll(/x/g, "*").replaceAll(/÷/g, "/"));
                    display.textContent = parseFloat(result.toFixed(10)).toString().replace('.', ',');
                    result = result + e.target.textContent;   
                }

            } else {
                result = result + e.target.textContent;

            }

            operator = e.target.textContent;

        } else if (e.target.classList.contains('number')) {
            
            if(result.toString().includes('+') || result.toString().includes('-') || result.toString().includes('x') || result.toString().includes('÷')) {
                if (result.toString()[0] == '-' && !operator) {
                    result = result + e.target.textContent;
                    display.textContent = result.slice(0, result.length);

                } else if (result.toString()[0] == '-' && operator) {
                    result = result + e.target.textContent;
                    display.textContent = result.slice(result.toString().lastIndexOf(operator)+1, result.length);
                
                } else if (result.toString()[result.length-1] == '0' && result.toString()[result.length-2] == operator) {
                    result = result.toString().slice(0, -1);
                    result = result + e.target.textContent;
                    display.textContent = result.slice(result.lastIndexOf(operator)+1, result.length);
                } else {
                result = result + e.target.textContent;
                display.textContent = result.slice(result.indexOf(operator)+1, result.length);
                }

            } else if(isOver) { 
                result = e.target.textContent;
                display.textContent = result;
                isOver = false;

            } else if (result.toString() == '0') {
                result = e.target.textContent;
                display.textContent = result;

            } else {
            result = result + e.target.textContent;
            display.textContent = result;
            }

        } else if (e.target.classList.contains('comma')) {
            if (result.toString().includes('.')) {
                if (result.toString().includes('+') || result.toString().includes('-') || result.toString().includes('x') || result.toString().includes('÷')) {
                    if (result.toString().lastIndexOf(operator) < result.toString().lastIndexOf('.')) {
                        return;

                    } else if(result.toString()[0] == '-' && !operator) {
                        result = result;
                        display.textContent = result.toString().slice(0, result.length);
                        
                    } else {
                        result = result + ".";
                        display.textContent = result.toString().slice(result.toString().lastIndexOf(operator)+1, result.length);
                    }
                    
                } else {
                return;
                }

            } else if (operator){
                result = result + ".";
                display.textContent = result.slice(result.indexOf(operator)+1, result.length);

            } else{
                result = result + ".";
                display.textContent = result;
            }

        } else {
            if (result.length >= 2 && result.toString()[result.length-1] == '0' && result.toString()[result.length-2] == '÷') {
                result = '0';
                display.textContent = 'undefined';

            } else {result = eval(result.toString().replaceAll(/x/g, "*").replaceAll(/÷/g, "/"));
            display.textContent = parseFloat(result.toFixed(10));
            isOver = true;
            operator = '';
            }
        }

        if (e.target.classList.contains('main')) {
            display.textContent = display.textContent.replace(/\B(?<!\,\d*)(?=(\d{3})+(?!\d))/g, ".");
        } else {
            display.textContent = display.textContent.replace('.',',').replace(/\B(?<!\,\d*)(?=(\d{3})+(?!\d))/g, ".");
        }

        display.textContent[0] == ',' ? display.textContent = '0' + display.textContent : display.textContent;

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


function holdButton() {
    document.querySelectorAll('.main').forEach(function(elem) {
        if (elem.textContent == operator) {
            elem.style.backgroundColor = 'white';
            elem.style.color = '#F1A33C';
        } else {
            elem.style.backgroundColor = '#F09114';
            elem.style.color = 'white';
        }
    })};