function verificarUsuario(usuario) {
//retorna tu promesa aqui

let validar = new Promise((resolve, reject) => {
    if(usuario === "admin"){
        resolve("Usuario correcto");
    } else {
        reject("Usuario incorrecto");
    }
});

return validar;

}


//usa .then() y catch() para manejar el resultado
verificarUsuario("admin")
.then(res => console.log(res))
.catch(err => console.error(err));


verificarUsuario("Ivan")
.then(res => console.log(res))
.catch(err => console.error(err));