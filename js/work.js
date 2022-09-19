// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById('btn-meet');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
  modalMeet();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

let modalMeet = () => {
  // modal variables
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  let modalContent = document.getElementsByClassName('modal-content');

  // clear existing modal content to avoid overlap
  modalTitle.empty();
  modalBody.empty();
  modalContent.empty();
  let nameElement = $(`<h1>Meet App</h1>`);
};
