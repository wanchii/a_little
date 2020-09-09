<template>
  <div>
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
      <form @submit.prevent="sendOrder">
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
            <router-link class="btn btn-primary p-3 w-50"
              to="/checkout/payment" :disabled="invalid">
              送出訂單
            </router-link>
          </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: {},
      cartTotal: 0,
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
    this.$bus.$on('sendCoupon', (code) => {
      this.order_detail.coupon = code;
    });
  },
  sendOrder() {
    // 新增一筆訂單 POST api/{uuid}/ec/orders
    this.isLoadin = true;
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;

    this.$http.post(url, this.order_detail)
      .then((response) => {
        if (response.data.data.id) {
          this.isLoading = false;
        }
      })
      .catch(() => {
        this.isLoading = false;
      });
  },
};
</script>

<style>

</style>
