import bcrypt from 'bcryptjs'
const usuarios = [
    {
        alias: 'Jenny',
        nombre: 'Jennifer',
        email: 'Jenny@gmail.com',
        imagen: 'Jenny.jpg',
        confirmado: 1,
        fechaNacimiento: '2005-05-11',
        password: bcrypt.hashSync('password', 10)
    }
]

export default usuarios