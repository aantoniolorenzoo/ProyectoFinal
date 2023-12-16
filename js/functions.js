// Obtén referencias a elementos del DOM
var modal = document.getElementById('myModal');
var openModalBtn = document.getElementById('openModal');
var closeModalBtn = document.getElementsByClassName('close')[0];

// Abre la modal cuando se hace clic en el enlace "Contacts"
openModalBtn.onclick = function() {
  modal.style.display = 'block';
}

// Cierra la modal cuando se hace clic en la "x"
closeModalBtn.onclick = function() {
  modal.style.display = 'none';
}

// Cierra la modal si se hace clic fuera de ella
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}




