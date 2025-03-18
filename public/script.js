
const inputText = document.getElementById('inputText');
const colorButton = document.getElementById('colorButton');

inputText.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    alert(inputText.value);
  }
});

let colorCycle = 0;
const colors = [
  { bg: '#ffffff', text: '#000000' }, 
  { bg: '#000000', text: '#ffffff' }, 
  { bg: '#00bcd4', text: '#f44336' } 
];

colorButton.addEventListener('click', () => {
  colorCycle = (colorCycle + 1) % colors.length;

  const { bg, text } = colors[colorCycle];
  
  inputText.style.backgroundColor = bg;
  inputText.style.color = text;
});
