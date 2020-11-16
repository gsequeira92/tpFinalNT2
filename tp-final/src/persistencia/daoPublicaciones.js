async function crearPublicacionDaoMemoria() {
    const elementos = []

    return {
    
        addUnique: async (elemento, claveUnica) => {
            const existe = elementos.some(e => {
                return e[claveUnica] === elemento[claveUnica]
            })
            if (existe) {
                throw new Error(claveUnica, 'debe ser unico')
            }
            elementos.push(elemento)
        },
     
        getAll: async () => {
            return [...elementos]
        },
        getById: async (id) => {
            return elementos.filter(e => e.id === id)
        },
    
        deleteById: async (id) => {
            const indiceParaBorrar = elementos.findIndex(e => e.id == id)
            if (indiceParaBorrar === -1) {
                throw crearErrorRecursoNoEncontrado('pasajero', id)
            }
            elementos.splice(indiceParaBorrar, 1)
        },

    }
}

module.exports = { crearPublicacionDaoMemoria }