<template>
    <div>
        <HeaderProduct/>
        <MainProduct/>
    </div>
</template>



<script>
import HeaderProduct from "~/components/HeaderProduct.vue";
import MainProduct from "~/components/MainProduct.vue";


export default{
    components:{
        HeaderProduct,
        MainProduct
    }
}

// export default{
//   components:{
//     Header,
//     Main,
//     Footer
//   }
// }
</script>