<template>
<section class="cart mb-md-7 mb-5">
  <loading :active.sync="isLoading"></loading>
  <div class="jumbotron jumbotron-fluid mb-0" style="background-image:url(https://images.pexels.com/photos/3735147/pexels-photo-3735147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
          background-position: 0% 10%; background-size: cover;height: 300px;">
  </div>
  <div class="container">
      <div class="row justify-content-center mt-3"
        v-if="carts.length > 0">
          <div class="col-md-10">
              <h2 class="text-secondary mb-3">購物車內容</h2>
              <div class="d-flex align-items-end bg-light py-2 mb-2" >
                  <h5 class="font-weight-bold text-primary">目前有 {{ cartSubTotal }} 筆</h5>
                  <a href="#" class="btn btn-outline-danger rounded-0 ml-auto" type="button"
                    @click.prevent="removeAllCart">
                      清空購物車
                  </a>
              </div>
              <div class="table-responsive">
                  <table class="table cart-table">
                      <thead>
                          <tr>
                              <th ></th>
                              <th >商品</th>
                              <th ></th>
                              <th >數量</th>
                              <th >單價</th>
                              <th >小計</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="item in carts" :key="item.product.id">
                              <td class="align-middle text-center">
                                  <button type="button" class="btn text-danger btn-sm"
                                      @click="removeCartItem(item.product.id)">
                                      <i class="fas fa-times"></i>
                                  </button>
                              </td>
                              <td class="align-middle">
                                  <img :src="item.product.imageUrl[0]"
                                      alt="" class="img-detail"></td>
                              <td class="align-middle">{{ item.product.title }}</td>
                              <td class="align-middle">
                                <div class="btn-group cart-btn-group" role="group" aria-label="...">
                                  <button type="button" class="btn btn-outline-primary btn-sm"
                                    @click="quantityUpdata(item.product.id, item.quantity - 1)"
                                    :disabled="item.quantity == 1">
                                    <i class="fas fa-minus"></i>
                                  </button>
                                  <input type="text" size="1" value="1" class="text-center border-0"
                                    v-model="item.quantity">
                                  <button type="button" class="btn btn-outline-primary btn-sm"
                                    @click="quantityUpdata(item.product.id, item.quantity + 1)">
                                    <i class="fas fa-plus"></i>
                                  </button>
                                </div>
                              </td>
                              <td class="text-right align-middle">
                                  {{ item.product.price | currency }}/{{ item.product.unit }}
                              </td>
                              <td class="text-right align-middle">
                                  {{ item.product.price * item.quantity }}
                              </td>
                          </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                            <td colspan="5" class="text-right">小計</td>
                            <td class="text-right">{{ cartTotal}}</td>
                        </tr>
                        <tr v-if=" cartTotal < 490" >
                            <td colspan="6" class="text-right text-danger">未滿490無法出貨</td>
                        </tr>
                    </tfoot>
                </table>
              </div>
              <div class="d-flex justify-content-end">
                <router-link class="btn btn-primary font-weight-bold rounded-0 px-6 py-2"
                  to="/checkout/order"  :class="{disabled:cartTotal < 490}">
                  結帳
                </router-link>
              </div>
          </div>
      </div>
      <div v-else>
        <div class="row justify-content-center align-items-center my-3">
          <!-- <div class="col-lg-7 col-12">
            <img src="../../assets/images/pexels-monicore-458796.jpg" alt="">
          </div> -->
          <div class="col-lg-5 col-12">
            <router-link to="/products"
              class="text-primary-dark d-flex align-items-center justify-content-center">
              <h4 class="font-weight-bold mb-0">購物車沒有商品資料，趕快來去選購</h4>
              <i class="fas fa-long-arrow-alt-left ml-2"></i>
            </router-link>
          </div>
        </div>
      </div>

  </div>
</section>

</template>

<script>

/**
 * @typedef {{}} NewType
 */

export default {
  data() {
    return {
      carts: [],
      cartTotal: 0,
      cartSubTotal: 0,
      isLoading: false,
      isProcessing: false,
    };
  },
  components: {

  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      // GET api/{uuid}/ec/shopping
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        this.carts = res.data.data;
        this.cartSubTotal = res.data.data.length;
        this.$bus.$emit('update-total');
        this.cartTotal = 0;
        this.carts.forEach((item) => {
          this.cartTotal += item.product.price * item.quantity;
        });
      });
    },
    removeAllCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false;
          this.getCart();
        });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.$http.delete(url).then(() => {
        this.isLoading = false;
        this.getCart();
      });
    },
    quantityUpdata(id, num) {
      if (num <= 0) return;
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const data = {
        product: id,
        quantity: num,
      };
      this.$http.patch(url, data).then(() => {
        this.isLoading = false;
        this.getCart();
      });
    },
  },

};
</script>
