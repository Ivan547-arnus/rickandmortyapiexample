let pagination = {
    props:{
        currentPage:null,
        pages:null
    },
    emits:['change-page'],
    setup(props, {emit}){
        const handleChangePage = (targetPage) => {
            emit("change-page", targetPage);
        }

        return { handleChangePage }
    },
    template:`
        <div class="pagination__container">
            <div @click="handleChangePage(currentPage-1)" class="pagination__item" v-if="(currentPage - 1) >= 1">
                <i class="fi-rr-angle-small-left"></i>
            </div>
            <div @click="handleChangePage(currentPage-2)" class="pagination__item" v-if="(currentPage - 2) > 1">
                {{currentPage-2}}
            </div>
            <div @click="handleChangePage(currentPage-1)" class="pagination__item" v-if="(currentPage - 1) >= 1">
                {{currentPage-1}}
            </div>
            <div class="pagination__item-selected">
                {{currentPage}}
            </div>
            <div @click="handleChangePage(currentPage+1)" class="pagination__item" v-if="(currentPage + 1) <= pages">
                {{currentPage+1}}
            </div>
            <div @click="handleChangePage(currentPage + 2)" class="pagination__item" v-if="(currentPage + 2) < pages">
                {{currentPage+2}}
            </div>
            <div @click="handleChangePage(currentPage + 1)" class="pagination__item" v-if="(currentPage + 1) <= pages">
                <i class="fi-rr-angle-small-right"></i>
            </div>
        </div>
    `
}