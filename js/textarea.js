const textareas = document.querySelectorAll('.inputText');
const buttons = document.querySelectorAll('.submitButton');

textareas.forEach((textarea, index) => {
    const button = buttons[index];

    textarea.addEventListener('input', function() {
        if (textarea.value.trim().length > 0) {
            button.disabled = false;
            button.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            button.disabled = true;
            button.classList.add('opacity-50', 'cursor-not-allowed');
        }
    });
});
