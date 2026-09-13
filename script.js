const progressBar = document.querySelector('#progressBar');
const progressValue = document.querySelector('#progressValue');
const toast = document.querySelector('#toast');
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#notifyBtn').addEventListener('click', () => {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
});

document.querySelector('#detailsBtn').addEventListener('click', () => {
  document.querySelector('#details').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// A subtle “alive” progress pulse keeps the page feeling active without pretending it is a real backend status.
let progress = 74;
setInterval(() => {
  progress = progress >= 78 ? 74 : progress + 1;
  progressBar.style.width = `${progress}%`;
  progressValue.textContent = `${progress}%`;
}, 5200);
