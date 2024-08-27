// script.js
let currentSection = 1;

function showSection(sectionNumber) {
    const sections = document.querySelectorAll('.form-section');
    sections.forEach((section, index) => {
        section.style.transform = `translateX(${(index - sectionNumber + 1) * 100}%)`;
    });
}

function nextSection(sectionNumber) {
    currentSection = sectionNumber;
    showSection(currentSection);
}

function prevSection(sectionNumber) {
    currentSection = sectionNumber;
    showSection(currentSection);
}

// Initialize the form by showing the first section
document.addEventListener('DOMContentLoaded', () => {
    showSection(currentSection);
});
