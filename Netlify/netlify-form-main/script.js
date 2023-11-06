const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    alert(`Login: ${data.get('login')} i Haslo: ${data.get('password')}`);

    console.log('Zatwierdzony formularz');
});

document.getElementById('btn').addEventListener('click', (e) => {
    console.log('KLIK');
    console.log('Target: ', e.target);
    console.log('Current Target: ', e.currentTarget);
});
