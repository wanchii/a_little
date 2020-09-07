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
        <router-link class="navbar-brand passeroOne text-primary font-weight-bold"
          to="/">
          a little
        </router-link>
        <router-link to="/cart"
                class="nav-link h5 mb-0 d-lg-none d-md-block">
                <span class="icon-basket">
                  <span  class="badge badge-pill badge-primary"
                    style="transform: translateX(-13px) translateY(-2px);opacity: .0;"
                    v-if="cartSubTotal === 0">0</span>
                  <span class="badge badge-pill badge-primary"
                    style="transform: translateX(-13px) translateY(-2px);"
                    v-else>
                    {{ cartSubTotal }}
                  </span>
                </span>
              </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link h5 mb-0"
              to="/about">
              關於
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link h5 mb-0"
              to="/products">
              產品
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link h5 mb-0"
              to="/recipe">
              食譜
              </router-link>
            </li>
            <li class="nav-item d-lg-block d-none">
              <router-link to="/cart"
                class="nav-link h5 mb-0">
                <span class=" icon-basket">
                  <span  class="badge badge-pill badge-primary"
                    style="transform: translateX(-13px) translateY(-2px);opacity: .0;"
                    v-if="cartSubTotal === 0">0</span>
                  <span class="badge badge-pill badge-primary"
                    style="transform: translateX(-13px) translateY(-2px);"
                    v-else>
                    {{ cartSubTotal }}
                  </span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</section>

</template>

<script>

export default {
  data() {
    return {
      carts: [],
      cartSubTotal: 0,
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
      });
    },
  },
};
</script>

<style>
</style>
