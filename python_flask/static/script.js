document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const modalChangeColorBtn = document.getElementById('modalChangeColorBtn');
    const modal = document.getElementById('customModal');
    const modalText = document.getElementById('modalText');
    const closeButton = document.getElementsByClassName('close-button')[0];
    const modalContent = document.getElementsByClassName('modal-content')[0];
    let colorState = 0;
    const colorSchemes = [
        { background: 'white', text: 'black' },
        { background: 'black', text: 'white' },     
        { background: 'lightblue', text: 'red' }     
    ];
    function showModal(text) {
        modalText.textContent = text;
        modal.style.display = 'block';
        applyColorSchemeToModal();
    }

    function applyColorSchemeToModal() {
        const currentScheme = colorSchemes[colorState];
        modalContent.style.backgroundColor = currentScheme.background;
        modalContent.style.color = currentScheme.text;
        
        if (colorState === 1) { 
            document.querySelector('.close-button').style.color = 'white';
        } else {
            document.querySelector('.close-button').style.color = '#aaa';
        }
    }
    function changeColors() {
        colorState = (colorState + 1) % 3;
        const currentScheme = colorSchemes[colorState];
        textInput.style.backgroundColor = currentScheme.background;
        textInput.style.color = currentScheme.text;
        applyColorSchemeToModal();
    }
    
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    textInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputText = textInput.value;
            if (inputText.trim() !== '') {
                showModal(inputText);
                textInput.value = '';
            }
        }
    });
    changeColorBtn.addEventListener('click', changeColors);
    modalChangeColorBtn.addEventListener('click', changeColors);
  });