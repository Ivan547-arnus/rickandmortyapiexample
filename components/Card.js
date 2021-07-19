let card = {
    props:{
        character:null
    },
    setup(props){
        const loading = ref(true);
        const{character} = toRefs(props);
        watch(character, (value, oldValue) => {    
            loading.value = true;
        });

        const handleLoad = () =>{
            loading.value = false;
        }

        return { loading , handleLoad} 
    },
    template:`
        <div v-if="character != null" class="card">
            <div class="card__image-container">
                <div class="card__loading-image" v-if="loading">
                    <i class="card__loading-image-icon" class="fi-rr-spinner"></i>
                </div>
                <img  @load="handleLoad" :src="character.image"/>
            </div>
            <div class="card__info">
                <h1>{{character.name}}</h1>
                <p>{{character.status}} - {{character.species}}</p>
                <p>{{character.gender}}</p>
                <p><strong>Origen: </strong>{{character.origin.name}}</p>
                <p><strong>Locación actual: </strong>{{character.location.name}}</p>
            </div>
        </div>
    `
}