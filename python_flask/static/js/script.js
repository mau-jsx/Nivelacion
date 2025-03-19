document.getElementById('textBox').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        alert(this.value);
    }
});
let colorState = 0;
document.getElementById('colorButton').addEventListener('click', function () {
    const textBox = document.getElementById('textBox');
    switch (colorState) {
        case 0:
            textBox.style.backgroundColor = 'white';
            textBox.style.color = 'black';
            break;
        case 1:
            textBox.style.backgroundColor = 'black';
            textBox.style.color = 'white';
            break;
        case 2:
            textBox.style.backgroundColor = 'lightblue';
            textBox.style.color = 'red';
            break;
    }
    colorState = (colorState + 1) % 3;
});
