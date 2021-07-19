app.component('home',{
    components:{
        'card':card,
        'pagination':pagination,
        'filters':filter
    },
    emits:['change-page','apply-filters', 'remove-filters'],
    props:{
        characters:null,
        currentPage:null
    },
    setup(props, {emit}){
        const screenFilter = reactive({
            handleActive:()=>{
                screenFilter.value = true;
            },
            handleDisable:() =>{
                screenFilter.value = false;
            },
            value:false
        });
        const handleChangePage = (targetPage) => {
            emit('change-page', targetPage);
        }

        const applyFilters = (filters) => {
            screenFilter.value = false;
            emit('apply-filters', filters);
        }

        const removeFilters = (filters) => {
            screenFilter.value = false;
            emit('remove-filters',filters);
        }
        
        
        return { handleChangePage, applyFilters, removeFilters, screenFilter }
    },
    template:`
        <div class="home__container" v-if="characters.results">
            <card  :character="item" v-for="(item, index) in characters.results"/>
            <filters @discard-filters="screenFilter.handleDisable" @remove-filters="removeFilters" @apply-filters="applyFilters" :is-active="screenFilter.value"/>
        </div>
        <div v-if="characters.error">
            <h1>{{characters.error}}</h1>
        </div>
        <div v-if="characters.info">
            <pagination @change-page="handleChangePage" :current-page="currentPage" :pages="characters.info.pages"/>
        </div>
        <div class="home__filter-button" @click="screenFilter.handleActive">
            <i class="fi-rr-search"></i>
        </div>
    `
});