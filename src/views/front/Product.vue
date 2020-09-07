<template>
<div>
      <!-- <h2>單一產品頁面</h2>
      <div class="row mt-3">
        <div class="col-6">
          <img :src="product.imageUrl" alt="" class="product-img">
        </div>
        <div class="col-6">
          <div class="d-flex flex-column align-items-start">
            <h3>{{product.title}}</h3>
            <p>商品描述:{{product.description}}</p>
            <p>NT${{product.price}}</p>
            <div class="d-flex">
              <div class="btn-group cart-btn-group mr-3" role="group" aria-label="...">
              <button type="button" class="btn btn-outline-info btn-sm">
                -
              </button>
              <input type="text" size="1" value="1" class="text-center" v-model="quantity">
              <button type="button" class="btn btn-outline-info btn-sm">
                +
              </button>
            </div>
            <button type="button" class="btn btn-outline-warning" >Addto Cart</button>
            </div>
          </div>
        </div>
      </div> -->
  <section class="py-5 mb-md-7 mb-5">
    <div class="container">
      <div class="row no-gutters bg-light">
        <div class="col-md-6 mb-md-0 p-md-4">
          <div class="h-100 d-flex">
            <img :src="product.imageUrl" class="w-100"
              alt="...">
          </div>
        </div>
        <div class="col-md-6 p-4 pl-md-0">
          <div class="h-100 d-flex flex-column">
            <h4 class="font-weight-bold py-3">{{product.title}}</h4>
            <h3 class="pb-3">NT${{product.price}}</h3>
            <p>商品描述:{{product.description}}</p>
            <p class="pb-3">
                八角，又稱八角茴香、大料和大茴香。
                <br>
                具有濃厚的香味，也是五香粉的調味之一</p>
            <div class="d-flex mt-auto">
                <input type="number" size="1" value="1" min="1"
                class="text-center num-control-input ">
                <button type="button" class="btn btn-primary rounded-0 p-2 ml-3">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-5">
        <div class="row">
          <div class="col-md-8 col-12">
            <div class="mb-4">
              <h4 class="pb-3"><span class="text-underline">商品資訊</span></h4>
              <strong>最少出貨量為1單位 </strong>
              <p>1單位為10g，如果需要30g請下3單位，依照需要公克數下單數量</p>
              <ul>
                <li>內容：散裝顆粒</li>
                <li>原產地：</li>
                <li>出貨時商品重量：±5%</li>
                <li>保存期限：6個月</li>
                <li>保存條件：陰涼乾燥處存放</li>
              </ul>
            </div>
            <div class="mb-4">
              <h4 class="pb-3"><span class="text-underline">料理小撇步</span></h4>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <img src="" alt="">
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
      product: {},
      quantity: 1,
    };
  },
  created() {
    // console.log(this.$route.params.id);
    const { id } = this.$route.params;
    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((response) => {
        this.product = response.data.data;
      });
  },

};
</script>

<style>
.product-img{
  width: 500px;
  height: auto;
  border-radius: 8px;
}

</style>
