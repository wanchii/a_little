<template>
<div class="py-3">
  <div class="container">
    <div class="row">
      <div class="col-lg-7 col-md-12 col-12 mb-md-3">
          <div class="py-1 d-flex justify-content-between">
              <router-link class="btn text-primary text-left"
                to="/cart">
                <i class="fas fa-long-arrow-alt-left"></i> 回到購物車
              </router-link>
              <router-link class="passeroOne h4 text-primary font-weight-bold"
                  to="/">
                  a little
                </router-link>
          </div>
          <div class="check border mt-1 p-3">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb  mb-4">
                    <li class="breadcrumb-item">
                      購物車
                    </li>
                    <li class="breadcrumb-item">
                      訂購資訊
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">付款</li>
                  </ol>
                </nav>
                <div class="mb-4">
                  <div class="d-flex align-items-center bg-light p-2 mb-2" >
                    <h6 class="font-weight-bold text-muted mb-0">訂購姓名:</h6>
                    <p class="mb-0 ml-2 text-primary-light">{{ order.user.name}}</p>
                  </div>
                  <div class="d-flex align-items-center bg-light p-2 mb-2" >
                    <h6 class="font-weight-bold text-muted mb-0">電子郵件:</h6>
                    <p class="mb-0 ml-2 text-primary-light">{{ order.user.email}}</p>
                  </div>
                  <div class="d-flex align-items-center bg-light p-2 mb-2" >
                    <h6 class="font-weight-bold text-muted mb-0">地址:</h6>
                    <p class="mb-0 ml-2 text-primary-light">{{ order.user.address}}</p>
                  </div>
                </div>
                <h4>付款確認</h4>
                <div class="p-2 bg-light d-flex justify-content-between mb-4">
                  <h6 class="font-weight-bold text-muted mb-0">付款方式</h6>
                  <p class="mb-0 text-primary-light ">{{ order.payment}}</p>
                </div>
                <div class="d-flex justify-content-end">
                  <button class="btn btn-danger"
                    @click.prevent="payNow" :disabled="isProcessing">
                      確認付款
                      <i class="fas fa-spinner fa-spin" v-if="isProcessing"> </i>
                    </button>
                </div>

          </div>
      </div>
      <div class="col-lg-5 col-md-12 col-12">
        <div class="bg-base py-6 px-3  sticky-top" style="min-height: 100vh;">
          <h3 class="px-5">訂單明細</h3>
          <div class="order p-5">
            <table class="table order-table">
              <thead>
                <tr v-for="item in order_products" :key="item.product.id + 1">
                  <td>
                    <img :src="item.product.imageUrl[0]"
                      alt="" class="table-img">
                  </td>
                  <td class="font-weight-bold text-vcraftsman-dark">
                    {{ item.product.title }} {{ item.quantity }}
                  </td>
                  <td class="text-right">
                    {{ item.product.price * item.quantity  | currency }}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">小計</td>
                  <td class="text-right">NT{{ subTotal }}</td>
                </tr>
                <tr>
                  <td colspan="2" v-if="order.coupon">{{ order.coupon }}</td>
                  <td colspan="2" v-else class="text-muted"> 沒有使用優惠券</td>
                  <td class="text-right text-danger">{{ discount }} </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="font-weight-bold ">總共</td>
                  <td class="text-right font-weight-bold ">NT{{ order.amount }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      order_products: [],
      subTotal: 0,
      discount: 0,
      isLoading: false,
      isProcessing: false,
    };
  },
  created() {
    this.orderId = this.$route.params;
    this.getOrder();
  },

  methods: {
    getOrder() {
      // GET api/{uuid}/ec/orders/{id}
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId.id}`;

      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          this.order = res.data.data;
          this.order_products = this.order.products;
          this.order_products.forEach((item) => {
            this.subTotal += item.product.price * item.quantity;
          });
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    payNow() {
      // POST api/{uuid}/ec/orders/{id}/paying
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId.id}/paying`;
      this.isProcessing = true;
      this.$http
        .post(url)
        .then((res) => {
          if (res.data.data.paid) {
            this.$router.push('/welldone');
          }
          this.isProcessing = false;
        })
        .catch(() => {
          this.isProcessing = false;
        });
    },
  },
};
</script>

<style>

</style>
