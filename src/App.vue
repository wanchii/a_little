<template>
  <div id="app">
    <!-- <loading :active.sync="isLoading"></loading> -->
    <Toast />
    <router-view/>
  </div>
</template>

<script>
import Toast from '@/components/Toasts.vue';

export default {
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  components: {
    Toast,
  },
  mounted() {
    // this.isLoading = true;
    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`).then((res) => {
      this.products = res.data.data;
      // this.isLoading = false;
    });
  },
};
</script>

<style lang="scss">
@import './assets/scss/all.scss';
@import './assets/style.css';

</style>
