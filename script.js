// Lab 10: A simple interactive show/hide feature for the Interests page.
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('interest-toggle');
    const details = document.getElementById('interest-extra');
    if (!button || !details) return;

    button.addEventListener('click', function () {
        const isOpening = details.hidden;
        details.hidden = !isOpening;
        button.setAttribute('aria-expanded', String(isOpening));
        button.textContent = isOpening ? 'Show Less' : 'Show More';
    });
});

// Keep the class demonstration form from submitting or sending information.
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.donate-form');
    if (form) form.addEventListener('submit', function (event) { event.preventDefault(); });
});
