// Deteksi browser untuk fallback
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari || isFirefox) {
    document.documentElement.classList.add('no-backdrop-filter');
}

const userData = {
    fullName,
    email,
    phone,
    password
};
localStorage.setItem('userData', JSON.stringify(userData));