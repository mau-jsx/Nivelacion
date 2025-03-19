// public/script.js
document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('textInput');
  const changeColorBtn = document.getElementById('changeColorBtn');
  const modalChangeColorBtn = document.getElementById('modalChangeColorBtn');
  const modal = document.getElementById('customModal');
  const modalText = document.getElementById('modalText');
  const closeButton = document.getElementsByClassName('close-button')[0];
  const modalContent = document.getElementsByClassName('modal-content')[0];
  
  // Estado para llevar el seguimiento del patrón de colores
  let colorState = 0;
  
  // Objeto para almacenar los esquemas de colores
  const colorSchemes = [
      { background: 'white', text: 'black' },      // Esquema 0
      { background: 'black', text: 'white' },      // Esquema 1
      { background: 'lightblue', text: 'red' }     // Esquema 2
  ];
  
  // Función para mostrar ventana emergente personalizada
  function showModal(text) {
      modalText.textContent = text;
      modal.style.display = 'block';
      
      // Aplicar el esquema de colores actual al modal
      applyColorSchemeToModal();
  }
  
  // Función para aplicar el esquema de colores al modal
  function applyColorSchemeToModal() {
      const currentScheme = colorSchemes[colorState];
      modalContent.style.backgroundColor = currentScheme.background;
      modalContent.style.color = currentScheme.text;
      
      // Ajustar el color del botón de cerrar según el fondo
      if (colorState === 1) { // Si es fondo negro
          document.querySelector('.close-button').style.color = 'white';
      } else {
          document.querySelector('.close-button').style.color = '#aaa';
      }
  }
  
  // Función para cambiar colores
  function changeColors() {
      // Cambiar al siguiente estado de color (circular: 0->1->2->0)
      colorState = (colorState + 1) % 3;
      
      // Aplicar el nuevo esquema de colores a la caja de texto
      const currentScheme = colorSchemes[colorState];
      textInput.style.backgroundColor = currentScheme.background;
      textInput.style.color = currentScheme.text;
      
      // Actualizar los colores del modal siempre, esté visible o no
      applyColorSchemeToModal();
  }
  
  // Función para cerrar el modal
  closeButton.onclick = function() {
      modal.style.display = 'none';
  }
  
  // Cerrar el modal solo si se hace clic fuera de él
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
  
  // Función para mostrar ventana emergente al presionar Enter
  textInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          const inputText = textInput.value;
          if (inputText.trim() !== '') {
              showModal(inputText);
              textInput.value = '';
          }
      }
  });
  
  // Evento de click en el botón principal de cambiar colores
  changeColorBtn.addEventListener('click', changeColors);
  
  // Evento de click en el botón del modal para cambiar colores
  modalChangeColorBtn.addEventListener('click', changeColors);
});