let result_box = document.querySelector('.result_box p')

const btns = document.querySelectorAll('.buttons button')
const btns_f = document.querySelectorAll('.f_buttons button')

console.log(btns)
console.log(btns_f)

let x = []

const cal = () => {

    // buttons click event
    btns.forEach((e, i) => {
        e.addEventListener('click', () => {
            // console.log('clicked'+' '+e.textContent)

            if (result_box.style.color === 'red') {
                result_box.textContent = ''

                result_box.style.color = 'white'
                result_box.style.fontSize = '3rem'
                result_box.style.letterSpacing = '0.5rem'

                x.push(e.textContent);
                result_box.append(e.textContent)
                if (e.textContent === 'DEL') {
                    result_box.textContent = ''

                    result_box.style.color = 'white'
                    result_box.style.fontSize = '3rem'
                    result_box.style.letterSpacing = '0.5rem'
                    x.pop()
                    console.log(x.join(''))
                    result_box.textContent = x.join('')


                }
            } else if (e.textContent === 'DEL') {
                result_box.textContent = ''

                result_box.style.color = 'white'
                result_box.style.fontSize = '3rem'
                result_box.style.letterSpacing = '0.5rem'
                x.pop()
                console.log(x.join(''))
                result_box.textContent = x.join('')


            } else {
                x.push(e.textContent);
                result_box.append(e.textContent)

                console.log(result_box.textContent)
                console.log(x)
            }
        })
    })



    //reset and = button
    btns_f.forEach((e) => {
        e.addEventListener('click', () => {
            if (e.textContent === 'RESET') {
                result_box.textContent = ''
                result_box.style.color = 'white'
                result_box.style.fontSize = '3rem'
                result_box.style.letterSpacing = '0.5rem'
            } else if (e.textContent === '=') {
                if (x[x.length - 1] === '+' || x[x.length - 1] === 'x' || x[x.length - 1] === '/' || x[x.length - 1] === '-') {
                    result_box.textContent = 'Invalid Input';
                    result_box.style.color = 'red'
                    result_box.style.fontSize = '1.5rem'
                    result_box.style.letterSpacing = '0.2rem'
                } else if (x.includes('x')) {
                    console.log('errpor')
                    x.forEach((e, i) => {
                        if (e === 'x') {
                            x[i] = '*';
                        }
                    })

                    result_box.textContent = eval(x.join(''));
                    if (Number.isInteger(eval(x.join('')))) {
                        result_box.textContent = eval(x.join(''));

                    } else {
                        result_box.textContent = eval(x.join('')).toFixed(3);

                    }


                } else if (Number.isInteger(eval(result_box.textContent))) {
                    result_box.textContent = eval(result_box.textContent);

                } else {
                    result_box.textContent = eval(result_box.textContent).toFixed(3);

                }

            }
        })
    })




}
cal()