document.addEventListener('DOMContentLoaded', function () {
  const display = document.querySelector('form .display input');
  const buttons = document.querySelectorAll('.Calculator form input');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      handleButtonClick(this.value);
    });
  });
  function handleButtonClick(value) {
    switch (value) {
      case '=':
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = 'Error';
        }
        break;
      case 'C':
        display.value = '';
        break;
      case 'D':
        let currentValue = display.value;
        display.value = currentValue.substring(0, currentValue.length - 1);
        break;
      default:
        display.value += value;
    }
  }
});
