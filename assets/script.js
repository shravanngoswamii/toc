function toggleAbstract(event) {
    // Find the parent div with class 'tab-set' (the container of the clicked element)
    var tabSet = event.target.closest('.tab-set');

    // Find the associated abstract content within the same container
    var content = tabSet.nextElementSibling;

    // Find the arrow in the clicked span
    var arrow = event.target.querySelector('.arrow');

    // Toggle the display of the abstract content
    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
    } else {
        content.style.display = "block";
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
    }
}

function toggleAuthors(category) {
    var content = document.getElementById('authors-' + category);
    var arrow = document.getElementById('arrow-authors-' + category);
    var otherCategory = category === 'current' ? 'former' : 'current';
    var otherContent = document.getElementById('authors-' + otherCategory);
    var otherArrow = document.getElementById('arrow-authors-' + otherCategory);

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
    } else {
        otherContent.style.display = "none";
        otherArrow.classList.remove('arrow-up');
        otherArrow.classList.add('arrow-down');

        content.style.display = "block";
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Attach the toggle function to all abstract toggle elements
    var toggleButtons = document.querySelectorAll('.tab-link[onclick^="toggleAbstract"]');
    toggleButtons.forEach(function (button) {
        button.addEventListener('click', toggleAbstract);
    });

    var toggleButton = document.querySelector('a[title="Abstract-Toggle"]');

    if (toggleButton) {
        toggleButton.addEventListener('click', function (event) {
            event.preventDefault();

            var abstracts = document.querySelectorAll('.abstract-content');
            var arrows = document.querySelectorAll('.arrow');
            var anyExpanded = Array.from(abstracts).some(function (abstract) {
                return abstract.style.display === "block";
            });

            abstracts.forEach(function (abstract) {
                abstract.style.display = anyExpanded ? "none" : "block";
            });
            arrows.forEach(function (arrow) {
                if (anyExpanded) {
                    arrow.classList.remove('arrow-up');
                    arrow.classList.add('arrow-down');
                } else {
                    arrow.classList.remove('arrow-down');
                    arrow.classList.add('arrow-up');
                }
            });
        });
    }
});
