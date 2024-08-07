function showContent(targetId) {
    const buttons = document.querySelectorAll('.settings-item');
    const contents = document.querySelectorAll('.content');

    buttons.forEach(button => {
        if (button.dataset.target === targetId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    contents.forEach(content => {
        if (content.id === targetId) {
            content.classList.add('active');
            content.classList.remove('hidden');
        } else {
            content.classList.remove('active');
            content.classList.add('hidden');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.settings-item').forEach(button => {
        button.addEventListener('click', () => {
            showContent(button.dataset.target);
        });
    });
});
