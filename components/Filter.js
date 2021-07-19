let filter = {
    props:{
        isActive:false
    },
    emits:['apply-filters','remove-filters', 'discard-filters'],
    setup(props, {emit}){
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
        });

        const handleApply = () => {
            emit('apply-filters', filters)
        }

        const handleRemove = () => {
            filters.name = "";
            filters.specie = "";
            filters.status.value = "";
            filters.gender.value = "";
            emit('remove-filters', filters)
        }

        const handleDiscard = () => {
            emit('discard-filters');
        }

        return {filters,handleApply,handleRemove ,handleDiscard}
    },
    template:`
        <div class="filter__container" v-if="isActive">
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
                <button @click="handleApply">Filtrar</button>
                <button @click="handleRemove">Eliminar filtros</button>
                <button @click="handleDiscard">Cancelar</button>
            </div>
        </div>
    `
}