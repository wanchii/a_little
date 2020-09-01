<template>
<!-- nav 導覽列 -->
<section class="header container">
  <div class="row">
    <div class="col-12 ">
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
              <!-- <a class="navbar-brand passeroOne text-primary font-weight-bold"
              href="layout.html">
                a little</a> -->
        <router-link class="navbar-brand passeroOne text-primary font-weight-bold"
          to="/">
          a little
        </router-link>
        <!-- <div class="dropdown">
          <a href="#" role="button" data-toggle="dropdown" id="dropdownCart"
            class="nav-link h5 mb-0 d-lg-none d-md-block">
            <span class=" icon-basket">
              <span class="badge badge-pill badge-primary"
                style="transform: translateX(-13px) translateY(-2px);">0</span>
              </span>
          </a>
          <div class="dropdown-menu dropdown-menu-right mt-2 px-2"
            style="min-width: 280px;">
              <h6 class="dropdown-header px-0">購物車</h6>

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

              <div class="d-flex justify-content-between py-2">
                <a href="#" class="btn btn-outline-danger" type="button"
                  @click.prevent="removeAllCart">
                  刪除全部
                </a>
                <a href="cart.html" class="btn btn-warning" type="button">
                購物車明細</a>
              </div>
          </div>
        </div> -->
        <CartIcon class=" d-lg-none d-md-block" />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <!-- <a class="nav-link h5 mb-0" href="about.html">
                關於
              </a> -->
              <router-link class="nav-link h5 mb-0"
              to="/about">
              關於
              </router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link h5 mb-0" href="products.html">
                產品
              </a> -->
              <router-link class="nav-link h5 mb-0"
              to="/products">
              產品
              </router-link>
            </li>
            <li class="nav-item d-lg-block d-none">
                <CartIcon />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</section>

</template>

<script>
import CartIcon from './CartIcon.vue';

export default {
  data() {
    return {};
  },
  components: {
    CartIcon,
  },
};
</script>

<style>
</style>
