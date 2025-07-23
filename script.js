const logo = document.getElementById('logo');
const container = document.getElementById('main');
const startBtn = document.getElementById('startBtn');
const fireworks = document.getElementById('fireworks');
const fireworksSound = document.getElementById('fireworksSound'); 

startBtn.addEventListener('click', () => {
  logo.classList.add('shrink-rotate');

  setTimeout(() => {
    container.classList.add('hide');
    fireworks.style.display = 'block';


    fireworksSound.play();
  }, 2000);
});
