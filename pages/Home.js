app.component('home',{
    components:{
        'card':card,
        'pagination':pagination,
        'filters':filter
    },
    emits:['change-page'],
    props:{
        characters:null,
        currentPage:null
    },
    setup(props, {emit}){
        const handleChangePage = (targetPage) => {
            emit('change-page', targetPage)
        }

        
        return { handleChangePage }
    },
    template:`
        <div class="home__container" v-if="characters.results">
            <card  :character="item" v-for="(item, index) in characters.results"/>
            <filters />
        </div>
        <div v-if="characters.error">
            <h1>{{characters.error}}</h1>
        </div>
        <div v-if="characters.info">
            <pagination @change-page="handleChangePage" :current-page="currentPage" :pages="characters.info.pages"/>
        </div>
        <div class="home__filter-button">
            <i class="fi-rr-search"></i>
        </div>
    `
});