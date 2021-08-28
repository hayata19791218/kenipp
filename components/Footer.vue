<template>
    <footer class="l-top-footer">
        <img src="../assets/images/effect.png" alt="" class="l-top-header__effect u-another-rotate u-mt1"> 
        <ul class="l-top-footer__lists">
            <li 
                v-for="list in lists"
                :key="list.id"
                class="l-top-footer__list"
            >
                <a :href="list.href">
                    <img 
                        :src="list.img" 
                        alt=""
                        class="l-top-footer__img"
                    >
                </a>
            </li>
        </ul>
        <nuxt-link 
            to=""
            class="l-top-footer__link"
        >プライバシーポリシー</nuxt-link>
        <p class="l-top-footer__copy">Copyright ©︎2018 Kneipp Japan.All Rights Reserved.</p>
    </footer>
</template>

<script>
export default{
    data:function(){
        return{
            lists:[
                {
                    href:'#',
                    img:require('@/assets/images/facebook.png')
                },
                {
                    href:'#',
                    img:require('@/assets/images/instagram.png')
                },
                {
                    href:'#',
                    img:require('@/assets/images/twitter.png')
                },
                {
                    href:'#',
                    img:require('@/assets/images/kneipp.png')
                },
            ]
        }
    }
}
</script>