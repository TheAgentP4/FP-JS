async function hola(nombre){
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            console.log('Hola '+ nombre);
            resolve(nombre);
        },1000);
    })
}
async function hablar(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log('Hola hola hola hola ');
            resolve(nombre);
        },2000);
    })
}
async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adiós '+ nombre);
            resolve(nombre);
        },1000);
    })  
}
async function main(){
    let nombre = await hola('Kevin');
    await hablar();
    hablar();
    await adios(nombre);
    console.log('Terminamos el proceso...')
}

console.log('Empezamos el proceso...')
main();