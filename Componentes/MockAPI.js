async function getFullUsers() {
    try {
        await users('https://66279b8eb625bf088c08fd8e.mockapi.io/api/usuarios')
    } catch (error) {
        console.log('Error al conseguir los usuarios:', error)
    }
}

async function users(url) {
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
            throw new Error('Error en la petición')
        }
        const datos = await respuesta.json()
        console.log(datos)
    } catch (error) {
        console.log('Error en la petición:', error)
    }
}

getFullUsers();

async function getFullReports() {
    try {
        await reports('https://66279b8eb625bf088c08fd8e.mockapi.io/api/reportes')
    } catch (error) {
        console.log('Error al conseguir los reportes:', error)
    }
}

async function reports(url) {
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
            throw new Error("error")
        }
        const datos = await respuesta.json()
        console.log(datos)
    } catch (error) {
        console.log(error)
        return null
    }
}

getFullReports()