const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainContainer = document.getElementById('main-container');
const successScreen = document.getElementById('success-screen');

// Function to move the "No" button
noBtn.addEventListener('mouseover', () => {
    // Calculate random positions
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Add some "extra" chaos
    const rotation = Math.random() * 360;
    const scale = Math.random() * (1.2 - 0.5) + 0.5;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    
    // Briefly vanish and reappear
    noBtn.style.opacity = '0';
    setTimeout(() => {
        noBtn.style.opacity = '1';
    }, 100);
});

// Logic for clicking "Yes"
yesBtn.addEventListener('click', () => {
    mainContainer.classList.add('hidden');
    successScreen.classList.remove('hidden');
    
    // Trigger Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ffffff']
    });
});