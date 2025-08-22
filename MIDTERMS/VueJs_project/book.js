const books = Vue.createApp({
    data(){
        return {
            showBooks: true,
            btitle: 'Buzz the Huzz',
            bauthor: 'James Mananquil',
            year: 2005
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
});
books.mount('#books')