app.component('loading', {
    props:{
        isActive:true
    },
    setup(){

    },
    template:`
        <div class="loading_container"> 
            <i class="icon" class="fi-rr-spinner"></i>
        </div>
    `
});