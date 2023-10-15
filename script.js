document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    const submitButton = document.querySelector('.contact-in-btn');

    function showThankYouPopup() {
        alert('Thank you! We will contact you soon.');
    }

    function handleSubmit(event) {
        event.preventDefault();


        showThankYouPopup();
    }


    form.addEventListener('submit', handleSubmit);

});