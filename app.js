const 
    delete_button_div = document.querySelector('.delete-button'),
    clear_button_div = document.querySelector('.clear-button'),
    sum_div = document.getElementById('sum'),
    operation_div = document.querySelectorAll('.operation'),
    number_div = document.querySelectorAll('.number'),
    screen_div = document.querySelector('.screen');

let 
   value1 = 0,
   out = '',
   output,
   znak = [], 
   value2 = undefined;

    const clear = () => {
        screen_div.innerHTML = '';
        value1 = 0;
        value2 = undefined;
        znak = [];
   }

   const deletee = () => {
       if (znak[znak["length"]-1] !== '=' && screen_div.textContent !== "don`t divide by 0" && screen_div.textContent !== ''){
       screen_div.innerHTML = screen_div.textContent.slice(0,-1);
       if ( screen_div.textContent !== '' ) {
       value1 = parseFloat(screen_div.textContent);
       } else {
           value1 = '';
       }
    }}

   delete_button_div.addEventListener('click', e => {
       deletee();
   })

    clear_button_div.addEventListener('click', e => {
      clear();
    });

    const add = (x,y) => {
        return x+y;
    }

    const subtract = (x,y) => {
        return x-y;
    }

    const multiply = (x,y) => {
        return x*y;
    }

    const divide = (x,y) => {
        return x/y;
    }

    const operate = (number1, operator, number2) => {
        switch (operator) {
            case '+':
              return add(number1,number2);
            break;  
            case '-':
               return subtract(number1,number2);
            break;
            case '*':
              return multiply(number1,number2);
            break;
            case '/':                  
                return divide(number1, number2);
             
        }
    }

    operation_div.forEach(e => e.addEventListener('click', e => {
        znak.push(e.target.value);
        if (znak['length'] === 1 && znak[0] !== '-' && screen_div.textContent === '' && value2 === undefined ||
            screen_div.textContent === '-' && value2 === undefined    
        ) {
            znak.pop();
            screen_div.innerHTML = '';
            console.log(1);
            return true;
        }
        if (screen_div.textContent === '-' && value2 === undefined || screen_div.textContent === '' && value2 === undefined ) {
            screen_div.innerHTML = '-';
            console.log(66);
            return true;
        }
       
        if (screen_div.textContent === 'don`t divide by 0') {
            return true;
        } 
        if (value1 === 0 && znak[znak['length']-2] === '/' ) {
        screen_div.innerHTML = 'don`t divide by 0';
        screen_div.style.setProperty('--fontsize', '40px');
        return true;
    }   if (value2 === undefined) {
        value2 = value1;
        value1 = '';
        return true;
    } if( value1 === 0 && value2 === undefined) {
        value1 = '';
        return true;
    }
     if(value1 === '' || value2 === NaN) {
        return true;
    }  if(znak[znak["length"]-2] === '=' && znak[znak["length"]-1] !== '=') {
        value1 = '';
        return true;
    }
     if(znak[znak["length"]-2] === '=') {
        summary = operate(value2, znak[znak["length"]-1], value1);
        out = summary.toString();
        screen_div.innerHTML = summary;
        value2 = parseFloat(screen_div.textContent);
        value1 = '';
    } else { 
        output = operate(value2, znak[znak["length"]-2], value1);
        screen_div.innerHTML = output;
        value2 = parseFloat(output);
        value1 = '';
        console.log(5);
    }
}) )
    
    sum_div.addEventListener('click', e => {
        if (value2 === undefined && znak['length'] === 0 ) {
            return true;
        }
        if (screen_div.textContent === 'don`t divide by 0' ||
          value2 === 0 && value1 === '' 
          ) {
            return true;
        } if (value1 === NaN && typeof value2 === 'number') {
            return true;
        } if (value2 === undefined && typeof value1 === 'number' || znak[znak['length']-1] === '=' ) {
            return true;
        }
        if (value1 === 0 && znak[znak['length']-1] === '/' ) {
            screen_div.innerHTML = 'don`t divide by 0';
            screen_div.style.setProperty('--fontsize', '40px');
            return true;
        }
         if ( value2 === undefined || value1 === '' && value2 === NaN || value2 === NaN || znak[znak["length"]-1] === '=' ) {
                console.log(1);
                screen_div.innerHTML = '';
                return true;
                
            } if (value1 === '' && znak[znak["length"]-1] === '*') {
                screen_div.innerHTML = value2;
                return true;
            } if (value1 === '' && znak[znak["length"]-1] === '/') {
                screen_div.innerHTML = value2;
                return true;
            }
            value2 = parseFloat(operate(value2,znak[znak["length"]-1],value1));
            summary = value2;
            screen_div.innerHTML = value2;
            value1 = value2;
            console.log(2);
            znak.push(e.target.value);
        })
    
    number_div.forEach(e => e.addEventListener('click', e => {
        if (screen_div.textContent === 'don`t divide by 0' ) {
            return true;
        }
        if (screen_div.textContent === `${value2}` && value1 !== value2 ) {
            screen_div.innerHTML = '';
        }  if (znak[znak["length"]-1] === '=') {
            clear();
        }
        screen_div.style.setProperty('--fontsize', '60px');
        screen_div.innerHTML += e.target.value;
        value1 = parseFloat(screen_div.textContent);

    }));

    document.addEventListener("keypress", (e) => {
        if (screen_div.textContent === `${value2}` && value1 !== value2) {
            screen_div.innerHTML = '';
        }
       if (e.which>=48 && e.which<=57 ||
           e.which>=96 && e.which<=105 ||
           e.key === '.'
       )    if (znak[znak["length"]-1] === '=') {
        clear();
    }
       screen_div.innerHTML += e.key;
       value1 = parseFloat(screen_div.textContent);
       screen_div.style.setProperty('--fontsize', '60px');
 })

