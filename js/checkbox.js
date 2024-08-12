const checkbox = document.querySelectorAll('.inputCheckbox');
const buttons = document.querySelectorAll('.submitButton');

checkbox.forEach((checkbox, index) => {
    const button = buttons[index];

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            button.disabled = false;
            button.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            button.disabled = true;
            button.classList.add('opacity-50', 'cursor-not-allowed');
        }
    });
});
