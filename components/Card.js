let card = {
    props:{
        character:null
    },
    setup(){
        
    },
    template:`
        <div v-if="character != null" class="card">
            <div>
                <img :src="character.image"/>
            </div>
            <div class="card__info">
                <h1>{{character.name}}</h1>
                <p>{{character.status}} - {{character.species}}</p>
                <p>{{character.gender}}</p>
                <p><strong>Origen: </strong>{{character.origin.name}}</p>
                <p><strong>locación actual: </strong>{{character.location.name}}</p>
            </div>
        </div>
    `
}