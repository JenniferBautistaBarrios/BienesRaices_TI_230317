import bcrypt from 'bcryptjs'
const usuarios = [
    {
        nombre: 'Jennifer',
        email: 'Jenny@gmail.com',
        confirmado: 1,
        fechaNacimiento: '2005-05-11',
        password: bcrypt.hashSync('password', 10)
    }
]

export default usuarios