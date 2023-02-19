const root = document.documentElement;
const button = document.getElementById('change-color-btn');
button.addEventListener('click', () => {
  setInterval(() => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    root.style.setProperty('--color', randomColor);
  }, 1000);
});
