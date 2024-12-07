import express from "express";
import { formularioLogin, formularioRegistro, registrar, agregarImagen, almacenarImagen,confirmar, formularioOlvidePassword, resetPassword, comprobarToken, nuevoPassword, autenticar, cerrarSesion } from "../controllers/usuarioController.js";
import upload from "../middleware/subirImagen.js";
const router = express.Router();
//Routing
router.get('/login', formularioLogin);
router.post('/login', autenticar);

//cerrar sesión 

router.post('/cerrar-sesion', cerrarSesion)

router.get('/registro', formularioRegistro);
router.post('/registro', registrar);

router.get('/registro/:id', agregarImagen);
router.post('/registro/:id', upload.single('imagen'), almacenarImagen);

router.get('/confirmar/:token', confirmar)

router.get('/olvide-password', formularioOlvidePassword);
router.post('/olvide-password', resetPassword);

//Almacena el nuevo password
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);

router.get('/message', async (req, res) => {
    res.render('templates/message', {
        pagina: 'Cuenta creada correctamente',
        mensaje: 'Hemos enviado un email de confirmación, presiona en el enlace.',
    })
})


export default router