const {
    createApp,
    ref,
    watch,
    toRefs,
    computed,
    reactive,
    onUnmounted,
    onMounted
} = Vue;

const app = createApp({
    setup(){
        const currentPage = ref(1);
        let loading = ref(false);
        const characters = ref({});
        let currentFilters = null;
        const getCharacters = async(params) => {
            try {
                loading.value = true;
                const response = await fetch(`https://rickandmortyapi.com/api/character/${params}`);
                if(response.ok){
                    const data = await response.json();
                    characters.value = data;
                    loading.value = false;
                }else{
                    const data = await response.json();
                    characters.value = data;
                    loading.value = false;
                }
            } catch(e) {
                console.log('error: ', e);  
            }
        }

        const handleChangePage = (targetPage) =>{
            currentPage.value = targetPage;
        }

        watch(currentPage, (value,oldValue) => {
            if(oldValue !== value ){
                if(currentFilters){
                    applyFilters(currentFilters);
                }
                else{
                    getCharacters(`?page=${currentPage.value}`);
                }
            }
        })

        const applyFilters = (filters) => {
            currentFilters = filters;
            let params = `?page=${currentPage.value}&name=${currentFilters.name}&status=${currentFilters.status.value}&gender=${currentFilters.gender.value}&species=${currentFilters.specie}`;
            getCharacters(params);
        }


        onMounted(()=>{
            getCharacters(`?page=${currentPage.value}`);
        });

        return { characters, currentPage, handleChangePage, loading, applyFilters } 
    }
})


