const form = document.querySelector('#save-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = document.querySelector('#video-url').value.trim();
  const permission = document.querySelector('#permission').checked;

  if (!permission) {
    message.textContent = 'Please confirm you have permission to save this video.';
    return;
  }

  try {
    const parsedUrl = new URL(url);
    message.textContent = `Link checked: ${parsedUrl.hostname}. Backend processing comes next.`;
  } catch {
    message.textContent = 'Enter a valid video or storage link to continue.';
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector(link.getAttribute('href'))?.focus({ preventScroll: true });
  });
});
