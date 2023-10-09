let string = "";
let buttons = document.querySelectorAll('.button'); // Corrected the class name 'buttton' to 'button'

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;

        }
       else if (e.target.innerHTML == 'C') {
            string ="";
            document.querySelector('input').value = string;

        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelectorAll('input').value = string; // There's an issue here

            // You should select a specific input element to set its value
            // You can use querySelector to select the first input element, for example
            document.querySelector('input').value = string;
        }


    });
});
