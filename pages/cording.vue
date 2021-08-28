<template>
    <div>
        <header class="p-cording-header">
            <h1 class="p-cording-header__title">実務や模写でコーディングしたサイト一覧</h1>
            <nuxt-link 
                class="p-cording-header__link"
                to="/"
            >前のページに戻る</nuxt-link>


        </header>
        <main>
            <div class="p-cording-mainwrap">
                <ul class="p-cording-flexbox">
                    <li
                        v-for="list in lists"
                        :key="list.id"
                        class="p-cording-wrap"
                    >
                        <a 
                            class="p-cording-wrap__link"
                            :href="list.url"
                            target="_blank" rel="noopener noreferrer"
                            v-if="list.category == 'task'"
                        >
                            <img 
                                :src="list.img" alt=""
                                class="p-cording-wrap__img"
                            >
                            <p class="p-cording-wrap__categoryName">{{list.categoryName}}</p>
                        </a>
                        <a 
                            class="p-cording-wrap__link"
                            :href="list.url"
                            target="_blank" rel="noopener noreferrer"
                            v-else
                        >
                            <img 
                                :src="list.img" alt=""
                                class="p-cording-wrap__img"
                            >
                            <p class="p-cording-wrap__categoryName">{{list.categoryName}}</p>
                        </a>
                    </li>
                </ul>
                <button
                    class="p-cording__topButton"
                    @click="returnTop"
                >TOPに戻る</button>
            </div>
        </main>
    </div>
</template>

<script>
export default{
    data:function(){
        return{
            lists:[
                {
                    category:'task',
                    // img:require('@/assets/images/task_kajitsunohana.jpg'),
                    categoryName:'実務(2021年)',
                    url:'https://kajitsunohana.com/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/task_jealous.jpg'),
                    categoryName:'実務(2020年)',
                    url:'https://jonio-uhei.github.io/cording-jealous/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/task_blume.jpg'),
                    categoryName:'実務(2020年)',
                    url:'https://jonio-uhei.github.io/cording-blume/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/task_luna.jpg'),
                    categoryName:'実務(2020年)',
                    url:'https://jonio-uhei.github.io/cording-lunazomu/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/task_zeoaqua.jpg'),
                    categoryName:'実務(2020年)',
                    url:'https://jonio-uhei.github.io/cording-zeo/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/task_sayan.jpg'),
                    categoryName:'実務(2020年)',
                    url:'https://jonio-uhei.github.io/cording-teaser/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/task_luna1.jpg'),
                    categoryName:'実務(2020年)',
                    url:'https://jonio-uhei.github.io/luna/'
                },
                {
                    category:'copy',
                    // img:require('@/assets/images/copy_demo4.jpeg'),
                    categoryName:'HTMLで模写(2021年)',
                    url:'https://powerful-falls-93239.herokuapp.com/#/'
                },
                {
                    category:'copy',
                    // img:require('@/assets/images/copy_mysite.jpg'),
                    categoryName:'HTMLで模写(2021年)',
                    url:'https://jonio-uhei.github.io/cording6/'
                },
                {
                    category:'copy',
                    // img:require('@/assets/images/copy_mysite1.jpeg'),
                    categoryName:'Vue.jsで模写(2021年)',
                    url:'https://jonio-uhei.github.io/vue-cording5/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_progate.jpg'),
                    categoryName:'Vue.jsで模写(2021年)',
                    url:'https://jonio-uhei.github.io/vue-cording4/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_wordpress.jpeg'),
                    categoryName:'HTMLで模写(2021年)',
                    url:'https://jonio-uhei.github.io/demo-cording3/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo.jpeg'),
                    categoryName:'HTMLで模写(2021年)',
                    url:'https://jonio-uhei.github.io/demo-cording2/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo1.jpeg'),
                    categoryName:'Vue.jsで模写(2021年)',
                    url:'https://vue-cording2.web.app/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo2.jpeg'),
                    categoryName:'HTMLで模写(2021年)',
                    url:'https://jonio-uhei.github.io/demo-cording1/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo3.jpeg'),
                    categoryName:'Vue.jsで模写(2021年)',
                    url:'https://vue-cording1.web.app/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo6.jpg'),
                    categoryName:'Vue.jsで模写(2021年)',
                    url:'https://vue-cording3.web.app/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo5.jpeg'),
                    categoryName:'HTMLで模写(2021年)',
                    url:'https://jonio-uhei.github.io/demo-cording/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo12.jpg'),
                    categoryName:'HTMLで模写(2021年)',
                    url:'https://jonio-uhei.github.io/corders/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo7.jpg'),
                    categoryName:'HTMLで模写(2019年)',
                    url:'https://jonio-uhei.github.io/cording-pas-pol/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo8.jpg'),
                    categoryName:'HTMLで模写(2019年)',
                    url:'https://kyohayata.github.io/write/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo9.jpg'),
                    categoryName:'HTMLで模写(2019年)',
                    url:'https://kyohayata.github.io/sango/'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo10.jpg'),
                    categoryName:'HTMLで模写(2019年)',
                    url:'https://kyohayata.github.io/jin/#'
                },
                {
                    category:'task',
                    // img:require('@/assets/images/copy_demo11.jpg'),
                    categoryName:'HTMLで模写(2019年)',
                    url:'https://kyohayata.github.io/cat/'
                },

                
            ]
        }
    },
    methods:{
        returnTop(){
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        }
    }

}
</script>