<template>
  <section class="well d-flex justify-content-center align-items-center">
        <div class="card custom-card rounded-0">
            <div class="card-bg"></div>
            <h1 class="mb-0 h4">
        <!-- <a class="passeroOne text-primary font-weight-bold" href="layout.html">a little</a> -->
                <router-link class="passeroOne text-primary font-weight-bold"
                  to="/">
                  a little
                </router-link>
            </h1>
            <div class="card-body">
                <h2 class="card-title font-weight-bold mb-4">訂單已送出</h2>
                <p class="card-text h5 mb-3">會盡快為您處理</p>
                <!-- <a href="products.html" class="btn btn-primary w-100">繼續購物</a> -->
                <router-link class="btn btn-primary w-100"
                  to="/products">
                  繼續購物
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {

};
</script>

<style>

</style>
