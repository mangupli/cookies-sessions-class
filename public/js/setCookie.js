const formCookie = document.getElementById('form-cookie');
const btn = document.getElementById('show-cookie-btn');

if (btn) {
  btn.addEventListener('click', () => {
    console.log('cookies: ', document.cookie);
  });
}

if (formCookie) {
  formCookie.addEventListener('submit', (event) => {
    event.preventDefault();
    const { cookieName, cookieValue } = event.target;

    /* будет сохранена в течение часа (max age в секундах) */
    document.cookie = `${cookieName.value}=${cookieValue.value}; max-age=3600`;
    alert(`Сохранена кука ${cookieName.value}`);
    formCookie.reset();
  });
}

const rememberUserBtn = document.getElementById('send-request-btn');

if (rememberUserBtn) {
  rememberUserBtn.addEventListener('click', async (event) => {
    const response = await fetch('/api/cookies/remember-me');
    const data = await response.text();
    console.log('Ответ от сервера: ', data);
  });
}
