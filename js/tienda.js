const imageLink = document.getElementById('image-link');
const popupContainer = document.getElementById('popup-container');
const popupImage = document.getElementById('popup-image');

imageLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Set the image source
    popupImage.src = 'https://www.google.com/imgres?q=fondo%20oscuro&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F9a%2F19%2Fa9%2F9a19a9926a7f76eb81c64c8dfed711dd.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F585749495294307960%2F&docid=M2FPuDB5e3U21M&tbnid=CHy_GqtNNvUr3M&vet=12ahUKEwjEpvynhYqJAxV9I0QIHVMBK3UQM3oFCIEBEAA..i&w=626&h=626&hcb=2&ved=2ahUKEwjEpvynhYqJAxV9I0QIHVMBK3UQM3oFCIEBEAA';
    // Show the popup container
    popupContainer.style.display = 'block';
});

// Add an event listener to close the popup when clicked outside
document.addEventListener('click', (e) => {
    if (e.target !== popupContainer && e.target !== imageLink) {
        popupContainer.style.display = 'none';
    }
});