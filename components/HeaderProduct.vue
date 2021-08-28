<template>
    <div>
        <header class="l-product-header">
            <div class="l-product-header__wrap">
                <h1>
                    <a href="#">
                        <img class="l-product-sult-logo" src="../assets/images/logo-another.png" alt="">
                    </a>
                </h1>
                <nav class="l-product-nav">
                    <ul class="l-product-lists">
                        <li 
                            @mouseover="mouseover1"
                            @mouseleave="mouseleave1"
                            class="l-product-list"
                        >
                            <p 
                                class="l-product-list__title" 
                                :class="{'fadeIn2':mouseoverFlag1}"
                            >About
                            <p
                                class="hide"
                                :class="{'fadeIn1':mouseoverFlag1}"
                            >クナイプを知る</p>
                            <fa 
                                class="l-product-list__awesome"
                                :class="{'fadeOut':mouseoverFlag1}"
                                :icon="['fas', 'chevron-down']" 
                            />
                            <img 
                                class="l-product-menu-img" 
                                :class="{'fadeIn1':mouseoverFlag1}"
                                src="../assets/images/chevron.png" 
                                alt=""
                            >

                            <!--モーダルの部分-->
                            <div
                                :class="{'fadeList1':mouseoverFlag1}"
                                class="l-product-img-wrap1"
                            >
                                <div class="l-product-img-wrap1__lists">
                                    <div>
                                        <a 
                                            :href="list.href"
                                            v-for="list in lists1"
                                            :key="list.id"
                                        >
                                            <img 
                                                class="l-product-img1" 
                                                :class="{'fadeImg1':mouseoverFlag1}"
                                                :src="list.img" 
                                                alt=""
                                            >
                                        </a>
                                    </div>
                                    <div>
                                        <a 
                                            :href="list.href"
                                            v-for="list in lists2"
                                            :key="list.id"
                                        >
                                            <img 
                                                class="l-product-img2" 
                                                :class="{'fadeImg1':mouseoverFlag1}"
                                                :src="list.img" 
                                                alt=""
                                            >
                                        </a>
                                    </div>
                                    <div>
                                        <a 
                                            :href="list.href"
                                            v-for="list in lists3"
                                            :key="list.id"
                                        >
                                            <img 
                                                class="l-product-img2" 
                                                :class="{'fadeImg1':mouseoverFlag1}"
                                                :src="list.img" 
                                                alt=""
                                            >
                                        </a>
                                    </div> 
                                </div>
                            </div>
                        </li>


                        <li 
                            @mouseover="mouseover2"
                            @mouseleave="mouseleave2"
                            class="l-product-list"
                        >
                            <p 
                                class="l-product-list__title" 
                                :class="{'fadeIn4':mouseoverFlag2}"
                            >Products
                            <p
                                class="hide"
                                :class="{'fadeIn3':mouseoverFlag2}"
                            >商品情報</p>
                            <fa 
                                class="l-product-list__awesome"
                                :class="{'fadeOut':mouseoverFlag2}"
                                :icon="['fas', 'chevron-down']" />
                            <img 
                                class="l-product-menu-img" 
                                :class="{'fadeIn3':mouseoverFlag2}"
                                src="../assets/images/chevron.png" 
                                alt=""
                            >

                            <!--モーダルの部分-->
                            <div
                                :class="{'fadeList2':mouseoverFlag2}"
                                class="l-product-img-wrap2"
                            >
                                <div class="l-product-img-wrap2__lists">
                                    <div class="u-another-flex1">
                                        <a 
                                            :href="list.href"
                                            v-for="list in lists4"
                                            :key="list.id"
                                            class="u-another-block"
                                        >
                                            <img 
                                                class="l-product-img3" 
                                                :class="{'fadeImg1':mouseoverFlag2}"
                                                :src="list.img" 
                                                alt=""
                                            >
                                        </a>
                                    </div>
                                    <div class="u-another-flex1">
                                        <a 
                                            :href="list.href"
                                            v-for="list in lists5"
                                            :key="list.id"
                                        >
                                            <img 
                                                class="l-product-img4" 
                                                :class="{'fadeImg1':mouseoverFlag2}"
                                                :src="list.img" 
                                                alt=""
                                            >
                                        </a>
                                    </div>
                                    <div class="u-another-flex1">
                                        <a 
                                            :href="list.href"
                                            v-for="list in lists6"
                                            :key="list.id"
                                        >
                                            <img 
                                                class="l-product-img4" 
                                                :class="{'fadeImg1':mouseoverFlag2}"
                                                :src="list.img" 
                                                alt=""
                                            >
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </li>


                        <li 
                            @mouseover="mouseover3"
                            @mouseleave="mouseleave3"
                            class="l-product-list"
                        >
                            <p 
                                class="l-product-list__title u-width1" 
                                :class="{'fadeIn6':mouseoverFlag3}"
                            >SNS & Community
                            <p
                                class="hide"
                                :class="{'fadeIn5':mouseoverFlag3}"
                            >SNS & コミュニティ</p>
                            <fa 
                                class="l-product-list__awesome"
                                :class="{'fadeOut':mouseoverFlag3}"
                                :icon="['fas', 'chevron-down']" />
                            <img 
                                class="l-product-menu-img" 
                                :class="{'fadeIn5':mouseoverFlag3}"
                                src="../assets/images/chevron.png" 
                                alt=""
                            >

                            <!--モーダルの部分-->
                            <div
                                :class="{'fadeList3':mouseoverFlag3}"
                                class="l-product-img-wrap3"
                            >
                                <div class="l-product-img-wrap3__lists">
                                    <div class="u-another-flex2">
                                        <a 
                                            :href="list.href"
                                            v-for="list in lists7"
                                            :key="list.id"
                                            class="u-another-block u-width2"
                                        >
                                            <img 
                                                class="l-product-img3" 
                                                :class="{'fadeImg1':mouseoverFlag3}"
                                                :src="list.img" 
                                                alt=""
                                            >
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li 
                            @mouseover="mouseover4"
                            @mouseleave="mouseleave4"
                            class="l-product-list"
                        >
                            <a href="#">
                                <p 
                                    class="l-product-list__title" 
                                    :class="{'fadeIn8':mouseoverFlag4}"
                                >Pick up
                                <p
                                    class="hide"
                                    :class="{'fadeIn7':mouseoverFlag4}"
                                >ピックアップ</p>
                            </a>
                        </li>


                        <li 
                            @mouseover="mouseover5"
                            @mouseleave="mouseleave5"
                            class="l-product-list"
                        >
                            <a href="#">
                                <p 
                                    class="l-product-list__title" 
                                    :class="{'fadeIn10':mouseoverFlag5}"
                                >Gallery
                                <p
                                    class="hide"
                                    :class="{'fadeIn9':mouseoverFlag5}"
                                >ギャラリー</p>
                            </a>
                        </li>


                        <li 
                            @mouseover="mouseover6"
                            @mouseleave="mouseleave6"
                            class="l-product-list"
                        >
                            <a href="#">
                                <p 
                                    class="l-product-list__title" 
                                    :class="{'fadeIn12':mouseoverFlag6}"
                                >FAQ
                                <p
                                    class="hide"
                                    :class="{'fadeIn11':mouseoverFlag6}"
                                >よくあるご質問</p>
                            </a>
                        </li>


                        <li 
                            @mouseover="mouseover7"
                            @mouseleave="mouseleave7"
                            class="l-product-list"
                        >
                            <a href="#">
                                <p 
                                    class="l-product-list__title" 
                                    :class="{'fadeIn14':mouseoverFlag7}"
                                >News
                                <p
                                    class="hide"
                                    :class="{'fadeIn13':mouseoverFlag7}"
                                >ニュース</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <ul class="l-product-sns-field">
                    <li>
                        <a class="l-product-list__title" href="#">
                            <fa class="l-product-list__icon" :icon="['fab', 'facebook-f']" />
                        </a>
                    </li>
                    <li>
                        <a class="l-product-list__title" href="#">
                            <fa  class="l-product-list__icon" :icon="['fab', 'instagram']" />
                        </a>
                    </li>
                    <li>
                        <a class="l-product-list__title" href="#">
                            <fa  class="l-product-list__icon" :icon="['fab', 'twitter']" />
                        </a>
                    </li>
                </ul>
            </div>
            
        </header>


    </div>
</template>

<script>
export default{
    data:function(){
        return{
            mouseoverFlag1:false,
            mouseoverFlag2:false,
            mouseoverFlag3:false,
            mouseoverFlag4:false,
            mouseoverFlag5:false,
            mouseoverFlag6:false,
            mouseoverFlag7:false,
            lists1:[
                {
                    href:'#',
                    img:require('@/assets/images/product-img1.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img2.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img3.png'),
                },
            ],
            lists2:[
                {
                    href:'#',
                    img:require('@/assets/images/product-img4.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img5.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img6.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img7.png'),
                },
            ],
            lists3:[
                {
                    href:'#',
                    img:require('@/assets/images/product-img8.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img9.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img10.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img11.png'),
                },
            ],
            lists4:[
                {
                    href:'#',
                    img:require('@/assets/images/product-img12.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img13.png'),
                },
            ],
            lists5:[
                {
                    href:'#',
                    img:require('@/assets/images/product-img14.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img15.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img16.png'),
                },
            ],
            lists6:[
                {
                    href:'#',
                    img:require('@/assets/images/product-img17.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img18.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img19.png'),
                },
            ],
            lists7:[
                {
                    href:'#',
                    img:require('@/assets/images/product-img20.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img21.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img22.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img23.png'),
                },
                {
                    href:'#',
                    img:require('@/assets/images/product-img24.png'),
                },
            ],
        }
    },
    methods:{
        mouseover1(){
            this.mouseoverFlag1 = true
        },
        mouseleave1(){
            this.mouseoverFlag1 = false
        },
        mouseover2(){
            this.mouseoverFlag2 = true
        },
        mouseleave2(){
            this.mouseoverFlag2 = false
        },
        mouseover3(){
            this.mouseoverFlag3 = true
        },
        mouseleave3(){
            this.mouseoverFlag3 = false
        },
        mouseover4(){
            this.mouseoverFlag4 = true
        },
        mouseleave4(){
            this.mouseoverFlag4 = false
        },
        mouseover5(){
            this.mouseoverFlag5 = true
        },
        mouseleave5(){
            this.mouseoverFlag5 = false
        },
        mouseover6(){
            this.mouseoverFlag6 = true
        },
        mouseleave6(){
            this.mouseoverFlag6 = false
        },
        mouseover7(){
            this.mouseoverFlag7 = true
        },
        mouseleave7(){
            this.mouseoverFlag7 = false
        },
    }
}
</script>

<style>
.hide{
    display: none;
    font-size: 10px;
    transform:translateY(10px);
    transition-duration:.1s;
    color:#004B49;
    text-align: center;
}
.fadeIn1{
    display: block!important;
    transform:translateY(0px);
    transition-duration:.4s;
}
.fadeIn2{
    transform:translateY(-10px);
    transition-duration:.1s;
}
.fadeIn3{
    display: block!important;
    transform:translateY(0px);
    transition-duration:.1s;
}
.fadeIn4{
    transform:translateY(-10px);
    transition-duration:.1s;
}
.fadeIn5{
    display: block!important;
    transform:translateY(-10px);
    transition-duration:.1s;
}
.fadeIn6{
    transform:translateY(-10px);
    transition-duration:.1s;
}
.fadeIn7{
    display: block!important;
    transform:translateY(0px);
    transition-duration:.1s;
}
.fadeIn8{
    transform:translateY(-10px);
    transition-duration:.1s;
}
.fadeIn9{
    display: block!important;
    transform:translateY(0px);
    transition-duration:.1s;
}
.fadeIn10{
    transform:translateY(-10px);
    transition-duration:.1s;
}
.fadeIn11{
    display: block!important;
    transform:translateY(0px);
    transition-duration:.1s;
}
.fadeIn12{
    transform:translateY(-10px);
    transition-duration:.1s;
}
.fadeIn13{
    display: block!important;
    transform:translateY(0px);
    transition-duration:.1s;
}
.fadeIn14{
    transform:translateY(-10px);
    transition-duration:.1s;
}
.fadeList1{
    background-color:#02716F;
    width: 100vw;
    transform:translateY(0px)!important;
    transition-duration:.4s;
}
.fadeList2{
    background-color:#02716F;
    width: 100vw;
    transform:translateY(0px)!important;
    transition-duration:.4s;
}
.fadeList3{
    background-color:#02716F;
    width: 106vw;
    transform:translateY(0px)!important;
    transition-duration:.4s;
}
.l-product-img1{
    display: none;
    width: 70%;
}
.l-product-img2{
    display: none;
    width: 70%;
}
.l-product-img3{
    display: none;
    width: 93%;
}
.l-product-img4{
    display: none;
    width: 90%;
}
.fadeImg1{
    display: block;
    margin-bottom: 15px;
}
.fadeImg2{
    display: block;
    margin-bottom: 15.5px;
}
.l-product-img-wrap1{
    padding: 40px 0;
    position:absolute;
    left: -31.9vw;
    transform:translateY(-5px);
    transition-duration:.4s;
}
.l-product-img-wrap1__lists{
    width: 60%;
    margin:0 auto;
    display: flex;
    justify-content:space-around;
}
.l-product-img-wrap2{
    padding: 40px 0;
    position:absolute;
    left: -37.3vw;
    transform:translateY(-5px);
    transition-duration:.4s;
}
.l-product-img-wrap2__lists{
    width: 50%;
    margin:0 auto;
}
.l-product-img-wrap3{
    padding: 40px 0;
    position:absolute;
    left: -43.3vw;
    transform:translateY(-5px);
    transition-duration:.4s;
}
.l-product-img-wrap3__lists{
    width: 54%;
    margin:0 auto;
    display: flex;
    /* justify-content:space-around;
    flex-wrap:wrap; */
}
.l-product-list__title{
    font-size: 18px;
    color:#004B49;
    font-family:'Arbutus Slab', serif;
    font-weight: bold;
    text-align: center;
    width: 80px;
}
.l-product-list__awesome{
    color:#004B49;
    display: block;
    margin:0 auto;
}
.fadeOut{
    opacity:0;
    transform:translateY(5px);
    transition-duration:.1s;
}
.l-product-menu-img{
    display: none;
    width: 30px;
    margin:0 auto;
    transition-duration:.4s;
    transform:translateY(0px);
    margin-bottom: -1px;
}
.l-product-sult-logo{
    width: 90px;
}
.l-product-header{
    position:fixed;
    width: 100%;
}
.l-product-header__wrap{
    width: 960px;
    display: flex;
    /* align-items:center; */
    margin-left:auto;
    margin-right:auto;
    padding-top: 15px;
}
.l-product-header h1{
    width: 90px;
}
.l-product-lists{
    display: flex;
}
.l-product-sns-field{
    display: flex;
    padding-top: 15px;
}
.l-product-sns-field li{
    margin-right: 10px;
}
.l-product-sns-field li:hover{
    opacity:.6;
}
.l-product-nav{
    display: flex;
    margin-left: 9%;
    padding-top: 15px;
}
.l-product-lists li{
    cursor:pointer;
    margin-right: 10px;
    position:relative;
}
.l-product-list__icon{
    font-size: 20px;
}




.u-another-flex1{
    display: flex;
}
.u-another-flex2{
    display: flex;
    flex-wrap:wrap;
}
.u-another-block{
    display: block;
}
.u-width2{
    width: 33%;
}






</style>