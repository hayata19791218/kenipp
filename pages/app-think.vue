<template>
    <div>
        <header class="p-cording-header">
            <h1 class="p-cording-header__title">自分でコードを考えて作ったWEBアプリ一覧</h1>
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
                    // img:require('@/assets/images/web_app8.jpg'),
                    categoryName:'Vue.js(三目並べ)',
                    url:'https://jonio-uhei.github.io/vue-marubatsu/'
                },
                {
                    // img:require('@/assets/images/web_app11.jpg'),
                    categoryName:'Vue.js(数当てゲーム)',
                    url:'https://jonio-uhei.github.io/vue-point/'
                },
                {
                    // img:require('@/assets/images/web_app12.jpg'),
                    categoryName:'Vue.js(おみくじ)',
                    url:'https://jonio-uhei.github.io/vue-omikuji/'
                },
                {
                    // img:require('@/assets/images/web_app9.jpg'),
                    categoryName:'Vue.js(スロットマシン)',
                    url:'https://jonio-uhei.github.io/vue-slot/'
                },
                {
                    // img:require('@/assets/images/web_app10.jpg'),
                    categoryName:'Vue.js(デジタル時計)',
                    url:'https://jonio-uhei.github.io/vue-clock/'
                },
                
                {
                    // img:require('@/assets/images/web_app13.jpg'),
                    categoryName:'Vue.js(じゃんけん)',
                    url:'https://jonio-uhei.github.io/vue-janken/'
                },
                {
                    // img:require('@/assets/images/web_app14.jpg'),
                    categoryName:'Vue.js(タイピング)',
                    url:'https://jonio-uhei.github.io/vue-typing/'
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