<template>
<div class="dropdown">
  <a href="#" role="button" data-toggle="dropdown" id="dropdownCart"
    class="nav-link h5 mb-0">
    <span class=" icon-basket">
      <span class="badge badge-pill badge-primary"
        style="transform: translateX(-13px) translateY(-2px);">0</span>
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
          <tr class="bg-light" v-for="item in cart" :key="item.product.id+1">
            <td></td>
            <td class="text-center">
            </td>
            <td class="text-right"></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colspan="3" class="text-right">合計</td>
            <td class="text-right"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 按鈕 -->
    <div class="d-flex justify-content-between py-2">
      <a href="#" class="btn btn-outline-danger" type="button"
        @click.prevent="removeAllCart">
        刪除全部
      </a>
      <!-- <a href="cart.html" class="btn btn-warning" type="button">
      購物車明細</a> -->
      <router-link to="/cart"
        class="btn btn-warning">
        購物車明細
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cartTotal: 0,
      cart: {},
    };
  },
  created() {
    this.getCart();
    // this.$bus.$on('update-total', () => {
    //   this.getCart();
    // });
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url).then((res) => {
        this.cartTotal = res.data.data.length;
        this.cart = res.data.data;
      });
    },
    removeAllCart() {

    },
  },
};
</script>

<style>

</style>
