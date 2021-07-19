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
        const currentPage = ref(2);
        const loading = ref(false);
        const characters = ref({});
        const getCharacters = async() => {
            const response = await fetch('https://rickandmortyapi.com/api/character/?page='+currentPage.value);
            const data = await response.json();
            characters.value = data;
        }

        const handleChangePage = (targetPage) =>{
            currentPage.value = targetPage;
        }

        watch(currentPage, (value,oldValue) => {
            if(oldValue !== value){
                getCharacters();
            }
        })


        onMounted(()=>{
            getCharacters();
        });

        return { characters, currentPage, handleChangePage, loading } 
    }
})


