<template>
<div>
  <section class="py-5 mb-md-7 mb-5">
    <div class="container">
      <div class="row no-gutters bg-light">
        <div class="col-md-6 mb-md-0 p-md-4">
          <div class="h-100 d-flex justify-content-center">
            <img :src="product.imageUrl" class="product-img"
              alt="...">
          </div>
        </div>
        <div class="col-md-6 p-4 pl-md-0">
          <div class="h-100 d-flex flex-column">
            <h3 class="font-weight-bold py-3">{{product.title}}</h3>
            <h3 class="pb-3">NT${{ product.price }}/ <small>{{ product.unit }}</small></h3>
            <p class="pr-5">
                {{ product.description }}
            </p>
            <ul class="list-unstyled d-flex">
              <li  class="mr-2" v-if="product.options.matchVeg">
                <span class="badge badge-pill badge-info">蔬菜</span>
              </li>
              <li  class="mr-2" v-if="product.options.matchSeafood">
                <span class="badge badge-pill badge-info">海鮮</span>
              </li>
              <li  class="mr-2" v-if="product.options.matchMeat">
                <span class="badge badge-pill badge-info">肉類</span>
              </li>
              <li  class="mr-2" v-if="product.options.matchDessert">
                <span class="badge badge-pill badge-info">甜點</span>
              </li>
              <li  class="mr-2" v-if="product.options.matchFruit">
                <span class="badge badge-pill badge-info">水果</span>
              </li>
              <li  class="mr-2" v-if="product.options.matchDrink">
                <span class="badge badge-pill badge-info">飲料</span>
              </li>
              <li  class="mr-2" v-if="product.options.matchDecoration">
                <span class="badge badge-pill badge-info">點綴</span>
              </li>
              <li class="mr-2"  v-if="product.options.matchRice">
                <span class="badge badge-pill badge-info">米飯</span>
              </li>
            </ul>
            <div v-if="product.options.packing == '散裝'">
              <h6 class="text-danger font-weight-bold">
                <i class="fas fa-info-circle"></i>
                下單重點
                </h6>
              <p>散裝，最低出貨量為10g，也就是一單位為10g
                <br>
              若需要20g，商品數量請選擇2個，出貨時會幫你裝成一袋，以此類推</p>
            </div>
            <div v-else>
              <h6 class="text-danger font-weight-bold">
                <i class="fas fa-info-circle"></i>
                下單重點
              </h6>
              <p>袋裝，一袋為40g
                <br>
                當日清晨採收，保存最佳香氣
              </p>
            </div>
            <div class="d-flex mt-auto">
                <input type="number" size="1" value="1" min="1"
                class="text-center num-control-input ">
            <!-- <button type="button" class="btn btn-primary rounded-0 p-2 ml-3">加入購物車</button> -->
                <button type="button" class="btn btn-primary rounded-0 p-2 ml-3"
                      :disabled="status.loadingItem === product.id"
                      @click.prevent="addToCart(product.id, product.title)">
                      <i v-if="status.loadingItem === product.id"
                      class="fas fa-circle-notch fa-spin"></i>
                      加到購物車
                </button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-5">
        <div class="row">
          <div class="col-md-8 col-12">
            <div class="mb-4">
              <h4 class="pb-3"><span class="text-underline">商品資訊</span></h4>
              <div v-html="product.content" />
            </div>
            <div class="mb-4" v-if="product.options.recipe" >
              <h4 class="pb-3"><span class="text-underline">料理小撇步</span></h4>
              <div  v-html="product.options.recipe" />
            </div>
            <div class="mb-4" v-else >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

</template>

<script>
export default {
  data() {
    return {
      product: {
        options: {},
      },
      quantity: 1,
      status: {
        loadingItem: '',
      },
    };
  },
  created() {
    // console.log(this.$route.params.id);
    const { id } = this.$route.params;
    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.product = res.data.data;
      });
  },
  methods: {
    addToCart(id, name, quantity = 1) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.post(url, cart).then(() => {
        this.$toast.success(`${name}加入購物車`);
        this.$bus.$emit('update-total');
        this.status.loadingItem = '';
      }).catch(() => {
        this.$toast.error(`${name}加入購物車失敗`);
        this.status.loadingItem = '';
      });
    },
  },

};
</script>

<style lang="scss" scoped>
/* .product-img{
  width: 360px;
  height: auto;
  border-radius: 0px;
} */
.badge-veg {
    color: #fff;
    background-color: #28a745;
}
.badge{
  padding: .5rem .8rem;
}

</style>
