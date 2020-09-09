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
                      <!-- <li class="breadcrumb-item next">Payment</li> -->
                  </ol>
              </nav>
              <div>
              <h4>付款確認</h4>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputName">姓名</label>
                    <input type="text" class="form-control" id="inputName">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputTel">電話</label>
                    <input type="tel" class="form-control" id="inputTel">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputEmail">電子郵件</label>
                  <input type="text" class="form-control" id="inputEmail" placeholder="123@123.com">
                </div>
                <div class="form-group">
                  <label for="inputAddress">地址</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="地址">
                </div>
                <!-- 付款方式 -->
                <div class="form-group">
                  <validation-provider rules="required" class="form-group" tag="div">
                    <label for="paymentSelect" class="font-weight-bold">購買方式</label>
                      <select class="select-arrow form-control " id="paymentSelect"
                        v-model="customer.payment" :class="classes">
                        <!-- <option >請選擇付款方式</option> -->
                          <option value selected disabled hidden>請選擇付款方式</option>
                          <option value="WebATM">WebATM</option>
                          <option value="ATM">ATM</option>
                          <option value="Barcode">Barcode</option>
                          <option value="Credit">Credit</option>
                          <option value="ApplePay">ApplePay</option>
                          <option value="GooglePay">GooglePay</option>
                      </select>
                  </validation-provider>
                </div>
                <!-- 留言 -->
                <div class="form-group">
                  <label for="formMessage" class="font-weight-bold">留言</label>
                  <textarea class="form-control" id="formMessage" rows="3"
                    v-model="customer.message"></textarea>
                </div>
                <!-- 送出表單使用 submit 的方法，如果驗證未通過則 disabled 該按鈕 -->
                <div class="d-flex justify-content-end">
                  <!-- <a href="well.html" class="btn btn-primary p-3 w-50 ">送出訂單</a> -->
                  <router-link class="btn btn-primary p-3 w-50"
                  to="/welldone">
                  送出訂單
                </router-link>
                </div>
              </form>
              </div>

          </div>
      </div>
      <div class="col-lg-5 col-md-12 col-12">
        <div class="bg-base py-6 px-3  sticky-top" style="height: 100vh;">
          <h3 class="px-5">訂單明細</h3>
          <div class="order p-5">
            <table class="table order-table">
              <thead>
                <tr>
                  <td>
                    <img src=""
                      alt="" class="table-img">
                  </td>
                  <td class="font-weight-bold text-vcraftsman-dark">八角 3 單位</td>
                  <td class="text-right">NT$120</td>
                </tr>
                <tr>
                  <td>
                    <img src=""
                      alt="" class="table-img">
                  </td>
                  <td class="font-weight-bold text-vcraftsman-dark">肉桂 5 單位</td>
                  <td class="text-right">NT$500</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">總計</td>
                  <td class="text-right">NT$4,680</td>
                </tr>
                <tr>
                  <td colspan="2">運費</td>
                  <td class="text-right">NT$80</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="font-weight-bold ">總共</td>
                  <td class="text-right font-weight-bold ">NT$4,760</td>
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
