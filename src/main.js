const tapButton = document.querySelector('.tap-button'); // Button to toggle the transition space
const transitionSpace = document.querySelector('.transition-space');
const mainText = document.querySelector('.main-text');

tapButton.addEventListener('click', () => {
    const isActive = transitionSpace.classList.toggle('active');
    const container = document.querySelector('.site-body .container');
    if (isActive) {
    mainText.classList.add('hide');
    container.classList.add('collapse');
    } else {
    mainText.classList.remove('hide');
    container.classList.remove('collapse');
    }
});

// Strudel Init

let strudelInitialized = false; // Flag to check if Strudel is initialized

document.getElementById('play').addEventListener('click', () => {
if (!strudelInitialized) {
    try {
    initStrudel();
    strudelInitialized = true;
    } catch (e) {
    console.error('Strudel init error:', e);
    }
}
try {
    note('<c a f e>(3,8)').jux(rev).play();

} catch (e) {
    console.error('Play error:', e);
}
});

document.getElementById('stop').addEventListener('click', () => {
try {
    hush();
} catch (e) {
    console.error('Stop error:', e);
}
});