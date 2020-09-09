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
      <li class="breadcrumb-item" aria-current="page">
        <router-link class="text-primary"
          to="/checkout/order">
          訂購資訊
        </router-link>
        </li>
      <li class="breadcrumb-item active">付款</li>
    </ol>
  </nav>
  <div class="mb-4">
      <div class="d-flex align-items-center bg-light p-2 mb-2" >
        <h6 class="font-weight-bold text-muted mb-0">訂購姓名:</h6>
        <p class="mb-0 ml-2 text-primary-light">Abby</p>
      </div>
      <div class="d-flex align-items-center bg-light p-2 mb-2" >
        <h6 class="font-weight-bold text-muted mb-0">電子郵件:</h6>
        <p class="mb-0 ml-2 text-primary-light">123@123.com</p>
      </div>
      <div class="d-flex align-items-center bg-light p-2 mb-2" >
        <h6 class="font-weight-bold text-muted mb-0">地址:</h6>
        <p class="mb-0 ml-2 text-primary-light">XXXXX</p>
      </div>
  </div>
  <h4>付款確認</h4>
  <div class="p-2 bg-light d-flex justify-content-between mb-4">
    <h6 class="font-weight-bold text-muted mb-0">付款方式</h6>
    <p class="mb-0 text-primary-light ">ATM轉帳</p>
  </div>
  <div class="d-flex justify-content-between">
    <router-link class="text-primary btn p-3"
      to="/checkout/order">
      回到訂購資訊
    </router-link>
    <router-link class="btn btn-primary p-3 w-50"
      to="/welldone">
      確認付款
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      carts: {},
      cartTotal: 0,
      customer: {
        email: '',
        name: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      coupon_code: '',
      coupon: {},
      isLoading: false,
      isProcessing: false,
    };
  },
  created() {
    // this.getCart();
  },
};
</script>

<style>

</style>
