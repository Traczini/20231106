console.log("class");

const obj = {
    login: 'Traczini',
    password: '123'
}

class SignInDto{
    keepSignedIn = true;

    constructor(login, password){
        this.login = login;
        this.password = password;
    }

    print(){
        console.log(this.login + ' ' + this.password);
    }

}

const dto = new SignInDto('login5', '123');
console.log(dto);
console.log(dto instanceof SignInDto);

const dto2 = new SignInDto('login2', '1231');
console.log(dto2.password);

dto2.print();


class NotFoundError extends Error{}

const getUserById = (id) => {
    return null;
}

try{
    const user = getUserById();
    
    
    throw new Error('Jakis blad');
    if (!user) throw new NotFoundError();
} catch(err){

    if(err instanceof NotFoundError){
        alert('Nie znaleziono user!')
    }
    else{
        console.error(err);
    }

    console.log(err);
    //alert(err.message);
}

console.log(
    Object.keys({login: 'Traczini', password: '12345'}),
    Object.keys(dto)
)

console.log(
     Object.values(dto)
)

console.log(
    Object.entries(dto)
)


for(const [key, value] of Object.entries(dto)){
    console.log(`${key} ${value}`);
}


for(const entry of Object.entries(dto)){
    const [f, s] = entry;
    console.log({Klucz: f, wartosc: s});

    //React
    //const [state, setStateE] = useState();
}


for(const [f, s] of Object.entries(dto)){
    console.log({Klucz: f, wartosc: s});
}

//destukturyzowac obiekt
const {login} = dto;
console.log(login);

/*
const LoginForm = (props) => {
    return <div id={props.id}></div>;
}


const LoginForm1 = (props) => {
    const {id} = props;
    return <div id={id}></div>;
}

const LoginForm1 = ({id, ... props}) => {
    return <div id={id}></div>;
}
*/

const arr = [];

arr['arr_f'] = 12345;
const {arr_f} = arr;
console.log(arr_f);


//JSON

const json1 = '{"login": "Traczini", "age" : 2}'
console.log(
    JSON.parse(json1),
    json1
);

console.log(JSON.stringify(dto));

const signInDto = new SignInDto("Traczini", "Tettee");
console.log(signInDto);
signInDto.print();
console.log(JSON.stringify(signInDto));


//const stingFromDto = JSON.stringify(signInDto);
//const dtoFromString = JSON.parse(signInDto);

//console.log(stingFromDto);
//console.log(new SignInDto(dtoFromString.login, dtoFromString.password));



//local Storage
localStorage.setItem('language', 'pl');
console.log(localStorage.getItem('language'));
localStorage.removeItem('language');


//session storage
sessionStorage.setItem('lng', 'EN');
console.log(sessionStorage.getItem('lng'));
sessionStorage.removeItem('lng');












