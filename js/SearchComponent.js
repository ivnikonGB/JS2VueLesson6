Vue.component('search', {
    props: [ 'value' ],
    template: `<form action="#" class="search-form" 
    @submit.prevent="$emit('filter', value)">
        <input type="text" class="search-field" v-model="value">
        <button type="submit" class="btn-search">
            <i class="fas fa-search"></i>
         </button>
    </form>`
});