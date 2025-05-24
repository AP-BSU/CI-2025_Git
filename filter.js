document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter_buttons button');
    const cards = document.querySelectorAll('.project_card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-name');

            // Toggle active class on buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show/hide cards based on the filter
            cards.forEach(card => {
                const cardFilter = card.getAttribute('data-name');
                if (filter === 'all' || cardFilter === filter) {
                    card.style.display = 'block';  
                } else {
                    card.style.display = 'none';  
                }
            });
        });
    });
});