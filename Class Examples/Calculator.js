const calculator = {
    num1: 0,
    num2: 0,
    operation: '',
    inputOutput: document.getElementById('calcInput'),
    clear : function() {
    //function clear() {
    this.inputOutput.value = '';
},
//if not added to object then the object needs to be passed in.
buttonClicked: function(button) {
    console.log(button.innerHTML);
    let inputBox = this.inputOutput;
    switch (button.innerHTML) {
        case 'M':
            break;
        case 'C':
            this.clear();
            break;
        case '/':
            break;
        case 'X':
            break;
        case '-':
            break;
        case '+':
            break;
        case '=':
            break;
        default:
            //if it made it to here it's a number
            inputBox.value = inputBox.value + button.innerHTML;
    }
},

}
