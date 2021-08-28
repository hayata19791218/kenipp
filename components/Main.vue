<template>
    <main>
        <section>
            <div class="l-top-main__item-explian">
                <img class="l-top-main__text1" src="../assets/images/text1.png" alt="">
                <p class="l-top-main__content">こだわりの天然岩塩にユズとジンジャーの天然植物成分を配合したバスソルト。<br>爽やかでほろ苦いユズに、ピリッとスパイシーなジンジャーをブレンドした香りで、<br>全身にぬくもり巡る発汗バスタイムを。<br><span>850g：2,400円（税抜） 50g：150円（税抜）</span></p>
                <a
                    href="#"
                    class="l-top-main__order-link"
                    @mouseover="mouseover"
                    @mouseleave="mouseleave"
                >
                    ご購入はこちら
                    <p
                        class="l-top-main__chevron"
                        :class="{'slide':mouseoverFlag}"
                    >></p>
                </a>
                <nuxt-link to="/product-sult"><img src="../assets/images/detail.png" alt="" class="l-top-main__detail"></nuxt-link>
                <div class="l-top-main__item-wrap">
                    <div class="l-top-main__border-top"></div>
                    <div class="l-top-main__border-middle">
                        <img class="l-top-main__border-img1" src="../assets/images/border-img1.png" alt="">
                        <img class="l-top-main__border-img2" src="../assets/images/border-img2.png" alt="">
                        <img class="l-top-main__border-img3" src="../assets/images/border-img3.png" alt="">
                        <div class="l-top-main__item-flex">
                            <div class="l-top-main__item-left">
                                <img class="l-top-main__border-img4" src="../assets/images/border-img4.png" alt="">
                                <ul>
                                    <li class="l-top-main__item-list"><span>✔︎</span>血行促進</li>
                                    <li class="l-top-main__item-list"><span>✔︎</span>冷え症予防</li>
                                    <li class="l-top-main__item-list"><span>✔︎</span>むくみ予防</li>
                                </ul>
                                <img class="l-top-main__border-img5" src="../assets/images/border-img6.png" alt="">
                            </div>
                            <div class="l-top-main__item-right">
                                <img class="l-top-main__border-img4" src="../assets/images/border-img5.png" alt="">
                                <ul>
                                    <li class="l-top-main__item-list"><span>✔︎</span>血行促進</li>
                                    <li class="l-top-main__item-list"><span>✔︎</span>発汗効果</li>
                                    <li class="l-top-main__item-list"><span>✔︎</span>鎮痛作用</li>
                                </ul>
                                <img class="l-top-main__border-img5" src="../assets/images/border-img6.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="l-top-main__border-bottom"></div>
                </div>
            </div>   
        </section>

        <section>
            <div class="l-top-recommend">
                <img src="../assets/images/effect.png" alt="" class="l-top-header__effect u-another-rotate">   
                <div class="l-top-recommend__wrap">
                    <img src="../assets/images/recommend-img1.png" alt="" class="l-top-recommend__img1">
                    <div class="l-top-recommend__block">
                        <img src="../assets/images/recommend-img2.png" alt="" class="l-top-recommend__img2">
                        <img src="../assets/images/recommend-img3.png" alt="" class="l-top-recommend__img3">
                    </div>
                    <img src="../assets/images/recommend-img4.png" alt="" class="l-top-recommend__img4">
                    <img src="../assets/images/recommend-img5.png" alt="" class="l-top-recommend__img5">
                    <img src="../assets/images/recommend-img6.png" alt="" class="l-top-recommend__img6">
                </div>
                <img src="../assets/images/effect.png" alt="" class="l-top-header__effect u-pt1">
            </div>
            <div class="l-top-recommend__contact">
                <img src="../assets/images/recommend-img7.png" alt="" class="l-top-recommend__img7">
                <p class="l-top-recommend__store-title">主な取り扱い店</p>
                <p class="l-top-recommend__store">ココカラファイン（セイジョー、ドラッグセガミ、ジップドラッグ、LIFORT、クスリのコダマ等）、トモズなどのドラッグストアや、バラエティショップ。</p>
                <p class="l-top-recommend__notice">※一部店舗でお取り扱いがない場合がございます。</p>
                <a href="#"><img src="../assets/images/recommend-img8.png" alt="" class="l-top-recommend__img8"></a>
            </div>
        </section>
     
    </main>
    
 
</template>

<script>
export default{
    data:function(){
        return{
            mouseoverFlag:false,
        }
    },
    methods:{
        mouseover(){
            this.mouseoverFlag=true;
        },
        mouseleave(){
            this.mouseoverFlag=false;
        }
    }
}
</script>

<style>
.slide{
    transform:translateX(10px);
    transition-duration:.7s;
}
</style>