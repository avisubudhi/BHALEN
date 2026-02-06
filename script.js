// Remote version check removed to prevent unwanted alerts.

const messages = [
    "Are you sure?",
    "Really sure??",
    "Khushi please...",
    "Think of our 3 years!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const SAD_IMAGES = [
    "https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif", // Sad cat
    "https://media.tenor.com/K0w_Y8p7fmkAAAAM/cat-sad.gif", // Crying cat
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif", // Crying Dawson
    "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif", // Sad pikachu
    "https://media.giphy.com/media/OPU6wzx8JlL8s/giphy.gif", // Crying cat meme
    "https://media.tenor.com/_Z8QhV_h2LwAAAAM/cute-cat-cat.gif" // Pleading eyes
];

let messageIndex = 0;
let imageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const mainImage = document.getElementById('main-image');

    // Change image to sad pout (cycle through array)
    mainImage.src = SAD_IMAGES[imageIndex % SAD_IMAGES.length];
    imageIndex++;

    // Change text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase Yes button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Spawn floating stickers
    for (let i = 0; i < 5; i++) {
        setTimeout(createFloatingSticker, i * 100);
    }
}

function createFloatingSticker() {
    const stickers = ["😢", "💔", "🥺", "😿", "🧸"];
    const sticker = document.createElement('div');
    sticker.classList.add('floating-sticker');
    sticker.textContent = stickers[Math.floor(Math.random() * stickers.length)];

    // Random position
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight; // Start from bottom or random height? Let's float up from random spots

    sticker.style.left = `${x}px`;
    sticker.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(sticker);

    // Remove after animation
    setTimeout(() => {
        sticker.remove();
    }, 4000); // Match animation duration
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
