<template>
<div class="dropdown">
  <a href="#" id="dropdownCart" data-toggle="dropdown"
    class="nav-link h5 mb-0">
    <span class=" icon-basket">
      <span class="badge badge-pill badge-primary"
        style="transform: translateX(-13px) translateY(-2px);">{{ cartSubTotal }}</span>
    </span>
  </a>
  <div class="dropdown-menu dropdown-menu-right mt-2 px-2"
    style="min-width: 280px;">
    <h6 class="dropdown-header px-0">購物車</h6>
    <!-- 購物車列表 -->
    <div class="cart-items mb-2">
      <table class="cartTable w-100">
        <thead>
          <tr>
            <th width="50%">標題</th>
            <th width="15%">數量</th>
            <th width="20%">金額</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-light" v-for="item in carts" :key="item.product.id+1">
            <td>{{ item.product.title }}</td>
            <td class="text-center">
              {{ item.quantity }}
            </td>
            <td class="text-right">
              {{ item.product.price * item.quantity }}
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colspan="2" class="text-right">合計</td>
            <td class="text-right">{{ cartTotal }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 按鈕 -->
    <div class="d-flex justify-content-between py-2">
      <button class="btn btn-outline-danger" type="button"
        @click.prevent="removeAllCart">
        <i v-if="isProcessing"
          class="fas fa-circle-notch fa-spin"></i>
        刪除全部
      </button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      carts: [],
      cartTotal: 0,
      cartSubTotal: 0,
      isProcessing: false,
      isOpenCart: false,
    };
  },
  created() {
    this.getCart();
    this.$bus.$on('update-total', () => {
      this.getCart();
    });
  },
  methods: {
    getCart() {
      // GET api/{uuid}/ec/shopping
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url).then((res) => {
        this.carts = res.data.data;
        this.cartSubTotal = res.data.data.length;
        // 總金額計算
        this.cartTotal = 0;
        this.carts.forEach((item) => {
          this.cartTotal += item.product.price;
        });
      });
    },
    removeAllCart() {
      this.isOpenCart = true;
      this.isProcessing = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.$http.delete(url)
        .then(() => {
          this.getCart();
          this.isProcessing = false;
        });
    },
  },

};
</script>

<style>

</style>
