(function () {
    const cambiarEstadoBotones = document.querySelectorAll('.cambiar-estado')
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

    cambiarEstadoBotones.forEach(boton => {
        boton.addEventListener('click', cambiarEstadoPropiedad)
    })

    async function cambiarEstadoPropiedad(e) {
        const { propiedadId: id } = e.target.dataset


        try {
            const url = `/propiedades/${id}`

            const respuesta = await fetch(url, {
                method: 'PUT',
                headers: {
                    'CSRF-Token': token
                }
            })

            const resultado = await respuesta.json()

            if (resultado) {
                if (e.target.classList.contains('button-warning')) {
                    e.target.classList.add('button-confirm')
                    e.target.classList.remove('button-warning')
                    e.target.textContent = 'Publicado'
                } else {
                    e.target.classList.add('button-warning')
                    e.target.classList.remove('button-confirm')
                    e.target.textContent = 'No Publicado'
                }
            }

        } catch (error) {

            console.log(error)
        }
    }


})()