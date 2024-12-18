// Add active class to the current button (highlight it)
$(document).ready(function () {
    $('body').scrollspy({ target: '#navbar', offset: 40 });

    $('#navbarNav .nav-link').on('click', function () {
        $('#navbarNav .nav-link').removeClass('active');
        $(this).addClass('active');
    });
});


function sendMessage() {
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
    
}

function showEcomModel() {
        // Trigger the Bootstrap modal
        const Modal = new bootstrap.Modal(document.getElementById('ecomModal'));
        Modal.show();
    
}
function showGameModel() {
    // Trigger the Bootstrap modal
    const Modal = new bootstrap.Modal(document.getElementById('gameModal'));
    Modal.show();

}
function showPhotoModel() {
    // Trigger the Bootstrap modal
    const Modal = new bootstrap.Modal(document.getElementById('photoModal'));
    Modal.show();

}


// Function to show the selected year card and hide others
function showCard(year) {


    event.preventDefault();
    // Hide all cards
    document.getElementById('first-year').style.display = 'none';
    document.getElementById('second-year').style.display = 'none';
    document.getElementById('third-year').style.display = 'none';
    document.getElementById('fourth-year').style.display = 'none';

    // Show the selected card
    document.getElementById(year + '-year').style.display = 'block';
}
