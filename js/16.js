/**
 * 
 */

const usuarios = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: 'user' },
    { username: 'test', password: 'test' },
    { username: 'demo', password: 'demo' },
    { username: 'root', password: 'root' },
    { username: 'guest', password: 'guest' },
    
];

function verificarDatos (username, password) {
    return new Promise((resolve, reject) => {
        const usuario = usuarios.find(usuario => usuario.username === username);
        if (usuario) {
            
            if (usuario.password === password) {
                resolve(usuario);
            } else {
                reject('Credenciales incorrectas');
            }
        } else {
            reject('Usuario no existe');
        }
    });

}

async function login (username, password) {
    try {
        const usuario = await verificarDatos(username, password);
        console.log(`Bienvenido ${usuario.username}`);
    } catch (error) {
        console.log('Error: ', error);
    } finally {
        console.log('Proceso terminado');
    }
}

login('admin', 'admin');
login('admin', 'admin1');
login('admin1', 'admin');
login('admin1', 'admin1');

