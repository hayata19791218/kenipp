<template>
    <div>
        <header class="p-cording-header">
            <h1 class="p-cording-header__title">ネットで勉強して作ったWEBアプリ一覧</h1>
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
                    // img:require('@/assets/images/web_app.jpg'),
                    categoryName:'Vue.js(モーダルウィンドウ)',
                    url:'https://jonio-uhei.github.io/vue-modal/'
                },
                {
                    // img:require('@/assets/images/web_app2.jpg'),
                    categoryName:'Vue.js(スネークゲーム)',
                    url:'https://jonio-uhei.github.io/vue-snake/'
                },
                {
                    // img:require('@/assets/images/web_app3.jpg'),
                    categoryName:'Vue.js(反射神経ゲーム)',
                    url:'https://jonio-uhei.github.io/vue-reflection/'
                },
                {
                    // img:require('@/assets/images/web_app4.jpg'),
                    categoryName:'Vue.js(ハンバーガーメニュー)',
                    url:'https://jonio-uhei.github.io/vue-hamburger-menu/'
                },
                {
                    // img:require('@/assets/images/web_app5.jpg'),
                    categoryName:'Vue.js(クイズアプリ)',
                    url:'https://jonio-uhei.github.io/vue-quiz/'
                },
                {
                    // img:require('@/assets/images/web_app6.jpg'),
                    categoryName:'Vuex(タスク管理アプリ)',
                    url:'https://my-trello-65bb3.web.app/'
                },
                {
                    // img:require('@/assets/images/web_app7.jpg'),
                    categoryName:'Vue.js(カレンダー)',
                    url:'https://jonio-uhei.github.io/vue-calendar/'
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