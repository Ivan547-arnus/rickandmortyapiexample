let filter = {
    setup(){
        const filters = reactive({
            name:'',
            specie:'',
            status:{
                options:['alive','dead','unknown'],
                value:''
            },
            gender:{
                options:['female','male','genderless','unknown'],
                value:''
            }
        })

        return {filters}
    },
    template:`
        <div class="filter__container">
            <div class="filter__form">
                <h1>Filtrar</h1>
                <strong>Por nombre:</strong>
                <input type="text" class="input" placeholder="Nombre de personaje" v-model="filters.name">
                <strong>Por especie:</strong>
                <input type="text" class="input" placeholder="Especie" v-model="filters.specie">
                <strong>Por estatus:</strong>
                <select v-model="filters.status.value">
                    <option v-for="(item, index) in filters.status.options">{{item}}</option>
                </select>
                <strong>Por genero:</strong>
                <select v-model="filters.gender.value">
                    <option v-for="(item, index) in filters.gender.options">{{item}}</option>
                </select>
                <button>Filtrar</button>
                <button>Eliminar filtros</button>
                <button>Cancelar</button>
            </div>
        </div>
    `
}