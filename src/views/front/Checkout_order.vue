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
          <router-link class="text-primary"
            to="/cart">
            購物車
          </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">訂購資訊</li>
        <li class="breadcrumb-item next">付款</li>
      </ol>
      </nav>
    <h4>訂購資訊</h4>
    <!-- validation-observer 驗證整體表單 -->
    <validation-observer v-slot="{ invalid }">
      <form @submit.prevent="createOrder">
        <div class="form-row">
          <div class="form-group col-md-6">
            <validation-provider rules="required" tag="div"
              v-slot="{ errors, classes }">
              <label for="inputName">姓名</label>
              <input type="text" class="form-control" id="inputName" :class="classes"
              name="姓名" placeholder="路晉" v-model="order_detail.name" >
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group col-md-6">
            <validation-provider rules="required|min:8|numeric" tag="div"
              v-slot="{ errors, classes }">
              <label for="inputTel">電話</label>
              <input type="tel" class="form-control" id="inputTel" v-model="order_detail.tel"
              name="電話" :class="classes">
            <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
          <div class="form-group">
            <validation-provider rules="required|email" tag="div"
                v-slot="{ errors, classes }">
              <label for="inputEmail">電子郵件</label>
              <input type="text" class="form-control" id="inputEmail" placeholder="123@123.com"
                name="電子郵件" v-model="order_detail.email" :class="classes">
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider rules="required"  tag="div"
                v-slot="{ errors, classes }">
              <label for="inputAddress">地址</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="地址"
              name="地址" :class="classes" v-model="order_detail.address">
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <!-- 付款方式 -->
          <div class="form-group">
            <validation-provider rules="required" tag="div"
            v-slot="{ errors, classes}">
              <label for="paymentSelect" class="font-weight-bold">購買方式</label>
                <select class="select-arrow form-control " id="paymentSelect"
                  v-model="order_detail.payment" :class="classes" name="付款方式">
                  <!-- <option >請選擇付款方式</option> -->
                    <option value selected disabled hidden >請選擇付款方式</option>
                    <option value="WebATM">WebATM</option>
                    <option value="ATM">ATM</option>
                    <option value="Barcode">Barcode</option>
                    <option value="Credit">Credit</option>
                    <option value="ApplePay">ApplePay</option>
                    <option value="GooglePay">GooglePay</option>
                </select>
                <span class="invalid-feedback">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <!-- 留言 -->
          <div class="form-group">
            <label for="formMessage" class="font-weight-bold">留言</label>
            <textarea class="form-control" id="formMessage" rows="3"
              v-model="order_detail.message"></textarea>
          </div>
          <div class="d-flex justify-content-end">
            <!-- <router-link class="btn btn-primary p-3 w-50"
              to="/checkout/payment" :disabled="invalid">
              送出訂單
            </router-link> -->
            <button type="submit" class="btn btn-primary p-3 w-50" :disabled="invalid">
              送出表單
            </button>
          </div>
      </form>
    </validation-observer>
          </div>

      </div>
      <div class="col-lg-5 col-md-12 col-12">
        <div class="bg-base py-6 px-3  sticky-top" style="min-height: 100vh;">
          <h3 class="px-5">訂單明細</h3>
          <div class="order p-5">
            <table class="table order-table">
              <thead>
                <tr v-for="item in carts" :key="item.product.id + 1">
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
                  <td class="text-right">NT{{ cartTotal | currency }}</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div class="input-group input-group-sm">
                      <input type="text"
                        placeholder="請輸入優惠碼" class="form-control rounded-0"
                        v-model="coupon_code">
                      <div class="input-group-append">
                        <button type="button"
                          class="btn btn-outline-secondary rounded-0"
                          :class="{disabled:coupon_code ===''}"
                          @click.prevent="addCouponCode">
                          套用優惠碼
                          <i v-if="isProcessing"
                          class="fas fa-circle-notch fa-spin"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="text-right text-danger"
                    v-if="coupon.enabled">
                    {{ discount | currency}}
                  </td>
                  <td class="text-right text-danger"
                    v-else>
                      0
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="font-weight-bold ">總共</td>
                  <td class="text-right font-weight-bold ">NT{{ countTotal | currency }}</td>
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
      carts: [],
      cartTotal: 0,
      cartSubTotal: 0,
      coupon_code: '',
      coupon: {},
      discount: 0,
      order_detail: {
        email: '',
        name: '',
        tel: '',
        address: '',
        coupon: '',
        payment: '',
        message: '',
      },
      isLoading: false,
      isProcessing: false,
    };
  },
  created() {
    this.getCart();
  },
  computed: {
    countTotal() {
      return Math.ceil(this.cartTotal - this.discount);
    },
  },
  methods: {
    getCart() {
      // GET api/{uuid}/ec/shopping
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        this.carts = res.data.data;
        this.cartTotal = 0;
        this.carts.forEach((item) => {
          this.cartTotal += item.product.price * item.quantity;
        });
      });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`;
      this.isProcessing = true;
      this.discount = 0;
      this.$http
        .post(url, { code: this.coupon_code })
        .then((res) => {
          this.getCart();
          this.coupon = res.data.data;
          const sum = Math.ceil(this.cartTotal * (this.coupon.percent / 100));
          this.discount = sum - this.cartTotal;
          this.$bus.$emit('sendCoupon', this.coupon_code);
          this.isProcessing = false;
        });
    },
    createOrder() {
    // 新增一筆訂單 POST api/{uuid}/ec/orders

      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;

      this.$http.post(url, this.order_detail)
        .then((response) => {
          if (response.data.data.id) {
            // eslint-disable-next-line no-console
            console.log('success');
            this.$router.push(`/checkout_payment/${response.data.data.id}`);
          }
        })
        .catch(() => {
          // eslint-disable-next-line no-console
          console.log('error');
        });

      // eslint-disable-next-line no-console
      console.log('表單已送出');
    },
  },
};
</script>

<style>

</style>
