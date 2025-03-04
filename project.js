document.addEventListener('DOMContentLoaded', function() {
    const projectTitles = document.querySelectorAll('.project h2');

    projectTitles.forEach(title => {
        title.addEventListener('click', () => {
            alert(`You clicked on: ${title.textContent}`);
        });
    });

    console.log('Projects page loaded successfully!');
});
