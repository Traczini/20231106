const loginForm = document.getElementById('form-login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(loginForm);

    const btnEl = document.getElementById('wynik');
    let l1 = document.getElementById('pl1').value;
    let dzia = document.getElementById('dzialanie').value;
    let l2 = document.getElementById('dl2').value;
    console.log(btnEl);
    btnEl.innerText = `Wynik z działania = ${l1} ${dzia} ${l2}`;
    console.log(document.getElementById('wynik'));

    

    const data = new FormData(e.target);
    console.log(loginForm.login.value); //ciekawostki
    console.log(data);
    console.log(data.get('login')); //super
    console.log(e.target.elements.login.value); //ciekawy zapis ale dlugi

    alert(`${data.get('login')}`);

    //promt();
    //confirm();
    

});


document.getElementById('btn').addEventListener('click', (e) =>{

    console.log(`Klick`);

});


