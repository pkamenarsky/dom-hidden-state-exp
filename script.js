var input = null;
var input_text = '';
var input_ss = 0;
var input_se = null;

function render() {
  console.log('rerender');

  const main = document.getElementById('main');

  if (input) {
    main.removeChild(input);
  }

  input = document.createElement('input');
  main.appendChild(input);

  input.focus();
  input.value = input_text;
  input.selectionStart = input_ss;
  input.selectionEnd = input_se;

  input.addEventListener('input', function() {
    input_text = input.value;
    input_ss = input.selectionStart;
    input_se = input.selectionEnd;

    render();
  });
}

function main() {
  render();
}
