let vm = new Vue({
    el: '#app',
    directives: {
        focus(el,bindings){
            if(bindings.value){
                el.focus();
            }
        }
    },
    created(){
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;

        this.hash = window.location.hash.slice(2) || 'all';

        window.addEventListener('hashchange', ()=>{
            this.hash = window.location.hash.slice(2);
        },false)
    },
    watch: {
        todos:{
            handler(){
                localStorage.setItem('data', JSON.stringify(this.todos));
            },deep: true
        }
    },
    computed: {
        count(){
            return this.todos.filter(item=>!item.isSelected).length;
        },
        filtertodos(){
            if(this.hash == 'all') return this.todos;
            if(this.hash == 'finish')return this.todos.filter(item=>item.isSelected);
            if(this.hash == 'unfinish') return this.todos.filter(item=>!item.isSelected);
        }
    },
    data: {
        todos: [
            {
                isSelected: false,
                title: '吃饭'
            },
            {
                isSelected: false,
                title: '睡觉'
            },
            {
                isSelected: false,
                title: '打豆豆'
            },
            {
                isSelected: false,
                title: '看书'
            },
            {
                isSelected: false,
                title: '撸代码'
            },
        ],
        val: '',
        cur: '',
        hash: ''
    },
    methods: {
        add(){
            if(this.val !== '')this.todos.push({isSelected: false,title: this.val});
            this.val = '';
        },
        del(todo){
            this.todos = this.todos.filter(item=> item !== todo);
        },
        remember(todo) {
            this.cur = todo;
        },
        cancel(){
            this.cur = '';
        }
    }
})