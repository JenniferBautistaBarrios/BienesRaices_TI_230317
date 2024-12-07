import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const {email, nombre, token} = datos

      // Enviar el email
      await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Confirma tu Cuenta en BienesRaices.com',
        text: 'Confirma tu cuenta en BienesRaices.com' ,
         html: `
        <div style="font-family: Arial, sans-serif; color: #555; line-height: 1.5; background-color: #f7f7f7; padding: 20px;">
        
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
         
          <div style="background-color: #b07c8e; color: #fff; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Hola, ${nombre}!</h1>
            <p style="margin: 5px 0 0; font-size: 16px;">¡Gracias por unirte a BienesRaices.com!</p>
          </div>
          
          <div style="padding: 20px;">
            <p>Hola, 
              <span style="color: #bc7493;">${email}</span>, 
              comprueba tu cuenta en BienesRaices.com.
            </p>
            <p>
              Tu cuenta ya está lista, solo debes confirmarla haciendo clic en el siguiente botón:
            </p>
            
            <div style="text-align: center; margin: 20px 0;">
              <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}" 
                style="
                  display: inline-block;
                  padding: 15px 30px;
                  background-color: #b07c8e;
                  color: #fff;
                  text-decoration: none;
                  border-radius: 5px;
                  font-weight: bold;
                  font-size: 16px;
                ">
                Confirmar Cuenta
              </a>
            </div>
            <p style="margin-top: 20px;">
              Si no creaste esta cuenta, puedes ignorar este mensaje.
            </p>
          </div>
          
          <div style="display: flex; align-items: center; border: 2px solid #b07c8e; border-radius: 10px; padding: 20px; margin: 20px;">
            
            <img src="cid:Logo" alt="Logo" style="width: 100px; margin-right: 20px; flex-shrink: 0;">
           
            <div>
              <div style="font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; line-height: 1.2; color: #b07c8e;">
                Bienes<span style="font-weight: normal;">Raices</span>
              </div>
              <p style="font-size: 14px; color: #555; margin: 10px 0;">
                Encuentra tu hogar ideal con nosotros. Contamos con las mejores opciones en bienes raíces.
              </p>
              <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/inicioSesion" 
                style="
                  color: #b07c8e;
                  text-decoration: none;
                  font-size: 14px;
                ">
                <span style="font-weight: bold;">Bienes</span>Raices.com
              </a>
            </div>
          </div>
         
          <div style="text-align: center; margin: 20px;">
            <img src="cid:Firma" alt="Firma" style="width: 150px; max-width: 100%;">
          </div>
        </div>
        
        <div style="text-align: center; font-size: 12px; color: #999; margin-top: 20px;">
          &copy; 2024 BienesRaices.com. Todos los derechos reservados.
        </div>
      </div>
        `,
        attachments: [
          {
            filename: "Logo_correo.png", 
            path: "./public/img/Logo_correo.png",
            cid: "Logo" 
          },
        {
          filename: "Firma.jpg",
            path: "./public/img/Firma.jpg",
            cid: "Firma"
        }]
    }         


      )

}
const emailOlvidePassword = async (datos) => {
  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const {email, nombre, token} = datos

    // Enviar el email
    await transport.sendMail({
      from: 'BienesRaices.com',
      to: email,
      subject: 'Reestablece tu contraseña en BienesRaices.com',
      text: 'Reestablece tu contraseña en BienesRaices.com' ,
       html: `
      <div style="font-family: Arial, sans-serif; color: #555; line-height: 1.5; background-color: #f7f7f7; padding: 20px;">
      
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
       
        <div style="background-color: #b07c8e; color: #fff; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Hola, ${nombre}!</h1>
          <p style="margin: 5px 0 0; font-size: 16px;">¿Olvidaste tu contraseña?</p>
        </div>
        
        <div style="padding: 20px;">
          <p>Hola, 
            <span style="color: #bc7493;">${email}</span>,
            recibimos una solicitud para reestablecer tu contraseña en BienesRaices.com.
          </p>
          <p>
            Para restablecer tu contraseña, haz clic en el siguiente botón:
          </p>
          
          <div style="text-align: center; margin: 20px 0;">
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3001}/auth/recuperarCuenta/${token}" 
              style="
                display: inline-block;
                padding: 15px 30px;
                background-color: #b07c8e;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                font-size: 16px;
              ">
              Restablecer Contraseña
            </a>
          </div>
          <p style="margin-top: 20px;">
            Si no solicitaste este cambio, puedes ignorar este mensaje.
          </p>
        </div>
        
        <div style="display: flex; align-items: center; border: 2px solid #b07c8e; border-radius: 10px; padding: 20px; margin: 20px;">
          
          <img src="cid:Logo" alt="Logo" style="width: 100px; margin-right: 20px; flex-shrink: 0;">
         
          <div>
            <div style="font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; line-height: 1.2; color: #b07c8e;">
              Bienes<span style="font-weight: normal;">Raices</span>
            </div>
            <p style="font-size: 14px; color: #555; margin: 10px 0;">
              Encuentra tu hogar ideal con nosotros. Contamos con las mejores opciones en bienes raíces.
            </p>
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3001}/auth/inicioSesion" 
              style="
                color: #b07c8e;
                text-decoration: none;
                font-size: 14px;
              ">
              <span style="font-weight: bold;">Bienes</span>Raices.com
            </a>
          </div>
        </div>
       
        <div style="text-align: center; margin: 20px;">
          <img src="cid:Firma" alt="Firma" style="width: 150px; max-width: 100%;">
        </div>
      </div>
      
      <div style="text-align: center; font-size: 12px; color: #999; margin-top: 20px;">
        &copy; 2024 BienesRaices.com. Todos los derechos reservados.
      </div>
    </div>
      `,
      attachments: [
        {
          filename: "Logo_correo.png", 
          path: "./public/img/Logo_correo.png",
          cid: "Logo" 
        },
      {
        filename: "Firma.jpg",
          path: "./public/img/Firma.jpg",
          cid: "Firma"
        }
      ]
    });
}

export {
    emailRegistro,
    emailOlvidePassword
}