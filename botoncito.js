

const showAlert = () => {
    {
    alert('Presionaste el botoncito');
    }
}



document.getElementById('nombreUser').onclick = function() 
{ 
    let names = document.getElementById ("nombreUser")
    showAlert() 
    alert(names)
} 


const loginAdmin = () => {

    let userAdmin = 'useradmin@gmail.com';
    let passAdmin = '123456PPo';

    let userEmail = document.getElementById("emailLogin").value;
    let userPassword = document.getElementById("passwordLogin").value;

    console.log(userAdmin, passAdmin);
    console.log(userEmail, userPassword);


    if (administrador.userAdmin == userEmail && passAdmin == userPassword) {
    alert('Bienvenido Admin');
}
}