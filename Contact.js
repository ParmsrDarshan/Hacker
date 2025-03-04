document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (firstName && lastName && email && message) {
        alert('Thank you, ' + firstName + '! Your message has been sent.');
        this.reset(); // Clear form after submission
    } else {
        alert('Please fill in all required fields.');
    }
});
